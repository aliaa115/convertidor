import React from "react";
import CreateBook_NavBar from "@/components/custom/navigation/navbar/create-book-navbar";
import { getCurrentUser } from "@/lib/auth";

export default async function BookLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const user = await getCurrentUser();
	return (
		<main className="w-screen max-h-screen overflow-auto">
			<div className="w-full flex bg-background fixed top-0">
				<CreateBook_NavBar user={user} />
			</div>
			<div className="flex justify-center items-center max-h-full mt-10">
				{children}
			</div>
		</main>
	);
}
