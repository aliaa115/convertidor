import * as z from "zod";
export const CapituloUpdateResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		nombre: z.string().optional(),
		indice: z.number().int().optional(),
		createdAt: z.date(),
		updatedAt: z.date(),
		libroId: z.number().int(),
		libro: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		parrafos: z.array(z.unknown()),
		notasAutor: z.array(z.unknown()),
	}),
);
