import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict();
export const CategoriaCreateManyEstadoInputObjectSchema: z.ZodType<Prisma.CategoriaCreateManyEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaCreateManyEstadoInput>;
export const CategoriaCreateManyEstadoInputObjectZodSchema = makeSchema();
