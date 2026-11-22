import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			indice: z.number().int().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const CapituloCreateManyLibroInputObjectSchema: z.ZodType<Prisma.CapituloCreateManyLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateManyLibroInput>;
export const CapituloCreateManyLibroInputObjectZodSchema = makeSchema();
