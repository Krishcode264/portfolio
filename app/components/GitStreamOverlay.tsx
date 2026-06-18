"use client";

import { useState, useEffect } from "react";

/* ─── Types ─────────────────────────────────────────────────────── */
interface GitHubEvent {
  id: string;
  type: string;
  repo: string;
  repoUrl: string;
  createdAt: string;
  title: string;
  url: string;
  body: string;
}

/* ─── Helpers ───────────────────────────────────────────────────── */
const EVENT_COLORS: Record<string, { color: string; icon: string; shadow: string }> = {
  PullRequestEvent:             { color: "#00c896", icon: "⇄", shadow: "rgba(0,200,150,.4)"  },
  IssueCommentEvent:            { color: "#4d9eff", icon: "💬", shadow: "rgba(77,158,255,.4)"  },
  PullRequestReviewEvent:       { color: "#b388ff", icon: "✔",  shadow: "rgba(179,136,255,.4)" },
  PullRequestReviewCommentEvent:{ color: "#b388ff", icon: "💭", shadow: "rgba(179,136,255,.4)" },
  IssuesEvent:                  { color: "#ffb347", icon: "⚠",  shadow: "rgba(255,179,71,.4)"  },
  PushEvent:                    { color: "#43e5b1", icon: "↑",  shadow: "rgba(67,229,177,.4)"  },
  CreateEvent:                  { color: "#00e5ff", icon: "+",  shadow: "rgba(0,229,255,.4)"   },
};

function ago(d: string) {
  const s = Math.floor((Date.now() - new Date(d).getTime()) / 1000);
  if (s < 60) return "just now";
  const m = Math.floor(s / 60); if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60); if (h < 24) return `${h}h ago`;
  const dy = Math.floor(h / 24); return `${dy}d ago`;
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function GitStream() {
  const [events, setEvents]   = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);

  /* Fetch GitHub events */
  useEffect(() => {
    fetch("https://api.github.com/users/Krishcode264/events/public?per_page=30")
      .then(r => r.json())
      .then(async (raw: Array<{
        id: string; type: string; created_at: string;
        repo: { name: string };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        payload: Record<string, any>;
      }>) => {
        const TYPES = ["PullRequestEvent","IssueCommentEvent","PullRequestReviewEvent",
          "PullRequestReviewCommentEvent","IssuesEvent","CreateEvent","PushEvent"];
        // Only show contributions to OTHER people's repos, not own repos
        const filtered = raw.filter(e =>
          TYPES.includes(e.type) &&
          !e.repo.name.toLowerCase().startsWith("krishcode264/")
        );

        const parsedPromises = filtered.map(async (e) => {
          const p = e.payload;
          let title = e.type;
          let url = `https://github.com/${e.repo.name}`;
          let body = "";
          const cap = (s: string) => s ? s[0].toUpperCase() + s.slice(1) : "";

          // Fetch detailed PR data if it is a PR-related event and missing details
          const prObj = p.pull_request;
          let prDetails: { title?: string; html_url?: string; body?: string } | null = null;
          if (prObj && prObj.url && !prObj.title) {
            try {
              const res = await fetch(prObj.url);
              if (res.ok) {
                prDetails = await res.json();
              }
            } catch (err) {
              console.error("Failed to fetch PR details", err);
            }
          }

          switch (e.type) {
            case "PullRequestEvent": {
              const prTitle = prDetails?.title || prObj?.title || `PR #${prObj?.number || p.number}`;
              title = `${cap(p.action)} PR: ${prTitle}`;
              url = prDetails?.html_url || prObj?.html_url || `https://github.com/${e.repo.name}/pull/${prObj?.number || p.number}`;
              body = prDetails?.body || prObj?.body || "";
              break;
            }
            case "IssueCommentEvent":
              title = `Comment on #${p.issue?.number}: ${p.issue?.title}`;
              url = p.comment?.html_url || url;
              body = p.comment?.body || "";
              break;
            case "IssuesEvent":
              title = `${cap(p.action)} issue #${p.issue?.number}: ${p.issue?.title}`;
              url = p.issue?.html_url || url;
              break;
            case "PullRequestReviewEvent": {
              const prTitle = prDetails?.title || prObj?.title || `PR #${prObj?.number}`;
              title = `${cap(p.review?.state || p.action)} review on PR: ${prTitle}`;
              url = p.review?.html_url || prDetails?.html_url || prObj?.html_url || `https://github.com/${e.repo.name}/pull/${prObj?.number}`;
              break;
            }
            case "PullRequestReviewCommentEvent": {
              const prTitle = prDetails?.title || prObj?.title || `PR #${prObj?.number}`;
              title = `Reviewed comment on PR: ${prTitle}`;
              url = p.comment?.html_url || prDetails?.html_url || prObj?.html_url || `https://github.com/${e.repo.name}/pull/${prObj?.number}`;
              body = p.comment?.body || "";
              break;
            }
            case "PushEvent":
              title = `Pushed ${p.commits?.length || 0} commit(s)`;
              body = (p.commits || []).map((c: { message: string }) => `• ${c.message.split("\n")[0]}`).join("\n");
              break;
            case "CreateEvent":
              title = `Created ${p.ref_type || ""} ${p.ref || ""}`;
              break;
          }

          return {
            id: e.id,
            type: e.type,
            repo: e.repo.name,
            repoUrl: `https://github.com/${e.repo.name}`,
            createdAt: e.created_at,
            title,
            url,
            body
          };
        });

        const parsed = await Promise.all(parsedPromises);
        setEvents(parsed);
      })
      .catch((err) => console.error("Error fetching events", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* ── keyframe styles ── */}
      <style>{`
        @keyframes gs-pulse { 0%,100%{opacity:1} 50%{opacity:.35} }
        @keyframes gs-spin  { to{transform:rotate(360deg)} }
        @keyframes gs-flow  { from{stroke-dashoffset:200} to{stroke-dashoffset:0} }
        .gs-pulse-wave { stroke-dasharray:20; animation:gs-flow 15s linear infinite; filter:drop-shadow(0 0 5px #00e5ff66); }
        .gs-card:hover { background:rgba(22,22,29,.95) !important; transform:translateY(-2px); }
        .gs-dot { display:flex; align-items:center; justify-content:center; }
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: "860px",
          margin: "0 auto",
          background: "rgba(9,9,14,0.4)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(0,229,255,0.08)",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(0,229,255,0.02), inset 0 1px 0 rgba(255,255,255,0.05)",
          overflow: "hidden",
        }}
      >
        {/* ── body ── */}
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "40px 20px", width: "100%" }}>

          {/* ── heading ── */}
          <div style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00e5ff", animation: "gs-pulse 1.5s ease-in-out infinite", display: "inline-block" }}/>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: "rgba(195,245,255,.75)", fontWeight: 600, letterSpacing: "0.06em" }}>
              LIVE ACTIVITY STREAM (EXTERNAL CONTRIBUTIONS)
            </span>
          </div>

          {/* ── wavy line + event timeline ── */}
          <div style={{ position: "relative" }}>

            {/* wavy SVG background */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", display: "flex", justifyContent: "center", overflow: "hidden" }}>
              <svg style={{ height: "100%", width: 100 }} preserveAspectRatio="none" viewBox="0 0 100 1000">
                <path
                  className="gs-pulse-wave"
                  d="M 50 0 Q 80 50 50 100 Q 20 150 50 200 Q 80 250 50 300 Q 20 350 50 400 Q 80 450 50 500 Q 20 550 50 600 Q 80 650 50 700 Q 20 750 50 800 Q 80 850 50 900 Q 20 950 50 1000"
                  fill="none" stroke="#00e5ff" strokeWidth="1.5"
                  style={{ strokeOpacity: .3 }}
                />
              </svg>
            </div>

            {/* loading */}
            {loading && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 0", gap: 14 }}>
                <div style={{ width: 30, height: 30, border: "2px solid #00e5ff", borderTopColor: "transparent", borderRadius: "50%", animation: "gs-spin .8s linear infinite" }}/>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "rgba(0,229,255,.6)", letterSpacing: "0.1em" }}>LOADING STREAM…</span>
              </div>
            )}

            {/* events */}
            {!loading && (
              <div style={{ display: "flex", flexDirection: "column", gap: 40, position: "relative", zIndex: 2 }}>
                {events.map((ev, i) => {
                  const s    = EVENT_COLORS[ev.type] ?? { color: "#c3f5ff", icon: "≡", shadow: "rgba(195,245,255,.3)" };
                  const left = i % 2 === 0;
                  return (
                    <div key={ev.id} style={{ display: "flex", alignItems: "center", justifyContent: left ? "flex-start" : "flex-end" }}>
                      <div style={{ display: "flex", alignItems: "center", width: "clamp(280px, 50%, 380px)", flexDirection: left ? "row-reverse" : "row", gap: 0 }}>

                        {/* branch gradient line */}
                        <div style={{ flexGrow: 1, height: 1, background: left ? `linear-gradient(270deg, transparent, ${s.color}33)` : `linear-gradient(90deg, transparent, ${s.color}33)` }}/>

                        {/* icon dot */}
                        <div className="gs-dot" style={{
                          width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                          background: "#0a0a0f", border: `2px solid ${s.color}`,
                          boxShadow: `0 0 14px ${s.shadow}`, zIndex: 3,
                          fontSize: 16, color: s.color,
                        }}>
                          {s.icon}
                        </div>

                        {/* card */}
                        <div style={{ width: 260, [left ? "marginRight" : "marginLeft"]: 14 }}>
                          <div className="gs-card" style={{
                            background: "rgba(18,18,23,.88)",
                            border: `1px solid ${s.color}33`,
                            borderRadius: 14, padding: "16px 18px",
                            transition: "all .25s", cursor: "default",
                          }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, gap: 6 }}>
                              <a href={ev.repoUrl} target="_blank" rel="noreferrer"
                                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "rgba(186,201,204,.6)", textDecoration: "none", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                {ev.repo}
                              </a>
                              <span style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(186,201,204,.3)", flexShrink: 0 }}>
                                {ago(ev.createdAt)}
                              </span>
                            </div>
                            <a href={ev.url} target="_blank" rel="noreferrer"
                              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#dce4e5", display: "block", lineHeight: 1.45, textDecoration: "none", marginBottom: ev.body ? 8 : 0 }}>
                              {ev.title}
                            </a>
                            {ev.body && (
                              <p style={{
                                fontFamily: "sans-serif", fontSize: 11, color: "rgba(186,201,204,.5)",
                                margin: 0, lineHeight: 1.6, whiteSpace: "pre-wrap",
                                display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                              }}>
                                {ev.body}
                              </p>
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
