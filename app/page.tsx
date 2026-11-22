import React from "react";
import NavBar from "@/components/custom/navigation/navbar/navbar";
import { getCurrentUser } from "@/lib/auth";
import { getFollowingUpdates } from "@/modules/home/actions/get-following-updates.action";
import { getPersonalizedPopularBooks } from "@/modules/home/actions/get-personalized-popular-books.action";
import { getPopularBooks } from "@/modules/home/actions/get-popular-books.action";
import { getRecentBooks } from "@/modules/home/actions/get-recent-books.action";

const Page = async () => {
	const user = await getCurrentUser();

	const [
		popularBooks,
		recentBooks,
		followingUpdates,
		personalizedPopularBooks,
	] = await Promise.all([
		getPopularBooks(),
		getRecentBooks(),
		user ? getFollowingUpdates() : [],
		user ? getPersonalizedPopularBooks() : [],
	]);

	return (
		<div className="min-h-screen flex w-full flex-col bg-background">
			<div className="fixed top-0 w-full bg-background">
				<NavBar user={user} />
			</div>

			<div className="flex-1 overflow-hidden px-5 pt-[72px]">
				<div className="px-5 py-6">
					<h2 className="mb-4 text-xl font-semibold">Populares</h2>
					{user
						? personalizedPopularBooks.map((book) => (
								<div key={book.id}>{book.titulo}</div>
							))
						: popularBooks.map((book) => (
								<div key={book.id}>{book.titulo}</div>
							))}
				</div>

				<div className="px-5 py-6">
					<h2 className="mb-4 text-xl font-semibold">Recientes</h2>
					{recentBooks.map((book) => (
						<div key={book.id}>{book.titulo}</div>
					))}
				</div>

				{user && (
					<div className="px-5 py-6">
						<h2 className="mb-4 text-xl font-semibold">Actualizaciones</h2>
						{followingUpdates.map((book) => (
							<div key={book.id}>{book.titulo}</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Page;
