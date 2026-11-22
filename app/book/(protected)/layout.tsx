import { unauthorized } from "next/navigation";
import type { ReactNode } from "react";
import { ScreenSize } from "@/components/custom";
import { getCurrentUser } from "@/lib/auth";

type AuthProps = {
	children: ReactNode;
};

export default async function AuthLayout({ children }: AuthProps) {
	const user = await getCurrentUser();
	if (!user) {
		unauthorized();
	}

	return <>{children}</>;
}
