import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			contenido: z.string().optional().nullable(),
			indice: z.number().int().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			capituloId: z.number().int(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const ParrafoCreateManyInputObjectSchema: z.ZodType<Prisma.ParrafoCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateManyInput>;
export const ParrafoCreateManyInputObjectZodSchema = makeSchema();
