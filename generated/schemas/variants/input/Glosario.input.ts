import * as z from "zod";
// prettier-ignore
export const GlosarioInputSchema = z
	.object({
		id: z.number().int(),
		palabra: z.string().optional().nullable(),
		significado: z.string().optional().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
		libroId: z.number().int(),
		libro: z.unknown(),
		escritorId: z.number().int(),
		escritor: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	})
	.strict();

export type GlosarioInputType = z.infer<typeof GlosarioInputSchema>;
