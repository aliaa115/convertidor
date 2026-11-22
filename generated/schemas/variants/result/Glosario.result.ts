import * as z from "zod";
// prettier-ignore
export const GlosarioResultSchema = z
	.object({
		id: z.number().int(),
		palabra: z.string().nullable(),
		significado: z.string().nullable(),
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

export type GlosarioResultType = z.infer<typeof GlosarioResultSchema>;
