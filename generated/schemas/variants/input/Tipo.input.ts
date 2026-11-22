import * as z from "zod";
// prettier-ignore
export const TipoInputSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string().optional().nullable(),
		tabla: z.string().optional().nullable(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		configuraciones: z.array(z.unknown()),
		libros: z.array(z.unknown()),
		comentarios: z.array(z.unknown()),
	})
	.strict();

export type TipoInputType = z.infer<typeof TipoInputSchema>;
