import { notFound } from "next/navigation";
import React from "react";
import CreateBook_NavBar from "@/components/custom/navigation/navbar/create-book-navbar";
import { getCurrentUser } from "@/lib/auth";
import { getBookById } from "@/modules/books/actions/get-books.actions";

export default async function BookLayout({ children, params }: { children: React.ReactNode; params: Promise<{ id: string }> }) {
	const { id } = await params;
	const user = await getCurrentUser();
	const book = await getBookById({ id });

	if (!book) notFound();

	if (book.escritor.usuarioId !== user?.id) notFound();
	// const book = await ( params.id );
	return (
		<main className="w-screen max-h-screen overflow-auto mt-5">
			<div className="w-full flex bg-background fixed top-0">
				<CreateBook_NavBar user={user} />
			</div>
			<div className="flex justify-center items-center max-h-full mt-10">{children}</div>
		</main>
	);
}
