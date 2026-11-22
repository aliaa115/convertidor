import * as z from "zod";
export const GlosarioCreateResultSchema = z.object({
	id: z.number().int(),
	palabra: z.string().optional(),
	significado: z.string().optional(),
	createdAt: z.date(),
	updatedAt: z.date(),
	libroId: z.number().int(),
	libro: z.unknown(),
	escritorId: z.number().int(),
	escritor: z.unknown(),
	estadoId: z.number().int(),
	estado: z.unknown(),
});
