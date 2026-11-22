"use server";

import { redirect } from "next/navigation";
import { logout } from "@/lib/auth";
import { delay } from "@/lib/utils";

export async function logoutAction() {
	await logout();
	// await delay(2000);
	redirect("/");
}
