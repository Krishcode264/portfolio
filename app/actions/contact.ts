"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function submitContactForm(formData: FormData) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !message) {
    return { error: "Name and message are required." };
  }

  // Inserting into 'messages' table as planned
  const { error } = await supabase.from("messages").insert([
    {
      name,
      email: email || null,
      message,
    },
  ]);

  if (error) {
    console.error("Supabase error:", error);
    return { error: "Failed to send message. Please try again later." };
  }

  return { success: true };
}
