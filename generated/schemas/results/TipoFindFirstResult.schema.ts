import * as z from "zod";
export const TipoFindFirstResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		nombre: z.string().optional(),
		tabla: z.string().optional(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		configuraciones: z.array(z.unknown()),
		libros: z.array(z.unknown()),
		comentarios: z.array(z.unknown()),
	}),
);
