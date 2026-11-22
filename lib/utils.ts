import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { is } from "zod/v4/locales";
import { getCurrentUser, getSession } from "./auth";
import { prisma } from "./prisma";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const delay = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));

export function isValidUrl(value: string) {
	try {
		new URL(value);
		return true;
	} catch {
		return false;
	}
}
