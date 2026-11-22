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
			comentarioPadreId: z.number().int().optional().nullable(),
			tipoId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const ComentarioCreateManyInputObjectSchema: z.ZodType<Prisma.ComentarioCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateManyInput>;
export const ComentarioCreateManyInputObjectZodSchema = makeSchema();
