"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  const cookieStore = await cookies(); // ✅ must await cookies()
  cookieStore.delete("session"); // delete your session cookie
  redirect("/sign-in"); // ✅ redirect to sign-in after logout
}
