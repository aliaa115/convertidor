import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			contenido: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			parrafoId: z.number().int(),
			comentarioPadreId: z.number().int().optional().nullable(),
			tipoId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const ComentarioCreateManyEscritorInputObjectSchema: z.ZodType<Prisma.ComentarioCreateManyEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateManyEscritorInput>;
export const ComentarioCreateManyEscritorInputObjectZodSchema = makeSchema();
