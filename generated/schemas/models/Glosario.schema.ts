import * as z from "zod";

export const GlosarioSchema = z.object({
	id: z.number().int(),
	palabra: z.string().nullish(),
	significado: z.string().nullish(),
	createdAt: z.date(),
	updatedAt: z.date(),
	libroId: z.number().int(),
	escritorId: z.number().int(),
	estadoId: z.number().int().default(1),
});

export type GlosarioType = z.infer<typeof GlosarioSchema>;
