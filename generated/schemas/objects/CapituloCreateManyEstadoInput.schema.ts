import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			indice: z.number().int().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libroId: z.number().int(),
		})
		.strict();
export const CapituloCreateManyEstadoInputObjectSchema: z.ZodType<Prisma.CapituloCreateManyEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateManyEstadoInput>;
export const CapituloCreateManyEstadoInputObjectZodSchema = makeSchema();
