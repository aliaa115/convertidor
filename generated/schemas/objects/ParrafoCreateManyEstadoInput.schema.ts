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
		})
		.strict();
export const ParrafoCreateManyEstadoInputObjectSchema: z.ZodType<Prisma.ParrafoCreateManyEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateManyEstadoInput>;
export const ParrafoCreateManyEstadoInputObjectZodSchema = makeSchema();
