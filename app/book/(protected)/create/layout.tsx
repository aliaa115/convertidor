import React from "react";
import CreateBook_NavBar from "@/components/custom/navigation/navbar/create-book-navbar";
import { getCurrentUser } from "@/lib/auth";

export default async function BookLayout({ children }: { children: React.ReactNode }) {
	const user = await getCurrentUser();
	return (
		<div className="min-h-screen max-h-screen flex max-w-screen flex-col justify-center">
			<div className="w-full flex bg-background fixed top-0">
				<CreateBook_NavBar user={user} />
			</div>
			<div className="w-full h-full mt-10 mx-auto flex-1 pt-18 overflow-auto px-5">{children}</div>
		</div>
	);
}
