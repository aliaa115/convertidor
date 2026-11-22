import * as z from "zod";
// prettier-ignore
export const TipoModelSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string().nullable(),
		tabla: z.string().nullable(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		configuraciones: z.array(z.unknown()),
		libros: z.array(z.unknown()),
		comentarios: z.array(z.unknown()),
	})
	.strict();

export type TipoPureType = z.infer<typeof TipoModelSchema>;
