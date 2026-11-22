import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			contenido: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritorId: z.number().int(),
			parrafoId: z.number().int(),
			tipoId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const ComentarioCreateManyPadreInputObjectSchema: z.ZodType<Prisma.ComentarioCreateManyPadreInput> = makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateManyPadreInput>;
export const ComentarioCreateManyPadreInputObjectZodSchema = makeSchema();
