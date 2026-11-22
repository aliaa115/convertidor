import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.number().int(),
			categoriaId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const LibroCategoriaCreateManyInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateManyInput>;
export const LibroCategoriaCreateManyInputObjectZodSchema = makeSchema();
