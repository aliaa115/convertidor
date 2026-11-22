import BookError from "@/components/custom/errors/book-error";
import { validarLibro } from "@/lib/validar-libro";

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	const { libro, error } = await validarLibro(id);

	if (error) {
		return <BookError estado={error} />;
	}

	return (
		<div className="relative flex min-h-[90vh] items-center justify-center flex-col w-full">
			<pre>{JSON.stringify(libro, null, 2)}</pre>
		</div>
	);
}
