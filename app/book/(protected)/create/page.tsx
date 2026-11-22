import { prisma } from "@/lib/prisma";
import CreateBookForm from "@/modules/books/components/create-book-form";

export default async function CreateBookPage() {
	const [idiomas, tipos] = await Promise.all([
		prisma.idioma.findMany({
			where: { estadoId: 1 },
			select: { id: true, nombre: true },
			orderBy: { nombre: "asc" },
		}),
		prisma.tipo.findMany({
			where: { estadoId: 1, tabla: "Libro" },
			select: { id: true, nombre: true },
			orderBy: { nombre: "asc" },
		}),
	]);

	return (
		<div className="mx-auto max-w-6xl p-6">
			<CreateBookForm idiomas={idiomas} tipos={tipos} />
		</div>
	);
}
