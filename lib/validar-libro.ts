import { getBookById } from "@/modules/books/actions/get-books.actions";

export type EstadoErrorLibro = "no-encontrado" | "inactivo" | "no-publicado";

export async function validarLibro(id: string, validarPublicado: boolean = true) {
	const libro = await getBookById({ id });

	let error: EstadoErrorLibro | null = null;

	if (!libro || libro.estadoId === 3) {
		error = "no-encontrado";
	} else if (libro.estadoId === 2) {
		error = "inactivo";
	} else if (validarPublicado && libro.publicado === false) {
		error = "no-publicado";
	}

	return {
		libro,
		error,
	};
}
