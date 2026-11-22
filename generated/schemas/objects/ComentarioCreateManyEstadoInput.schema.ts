import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			contenido: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritorId: z.number().int(),
			parrafoId: z.number().int(),
			comentarioPadreId: z.number().int().optional().nullable(),
			tipoId: z.number().int().optional().nullable(),
		})
		.strict();
export const ComentarioCreateManyEstadoInputObjectSchema: z.ZodType<Prisma.ComentarioCreateManyEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateManyEstadoInput>;
export const ComentarioCreateManyEstadoInputObjectZodSchema = makeSchema();
