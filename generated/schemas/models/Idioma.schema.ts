import * as z from "zod";

export const IdiomaSchema = z.object({
	id: z.number().int(),
	nombre: z.string().nullish(),
	siglas: z.string().nullish(),
	createdAt: z.date(),
	updatedAt: z.date(),
	estadoId: z.number().int().default(1),
});

export type IdiomaType = z.infer<typeof IdiomaSchema>;
