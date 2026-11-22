import * as z from "zod";
export const MarcadorFindFirstResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		nombre: z.string().optional(),
		color: z.string().optional(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		escritor: z.unknown(),
		parrafoId: z.number().int(),
		parrafo: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	}),
);
