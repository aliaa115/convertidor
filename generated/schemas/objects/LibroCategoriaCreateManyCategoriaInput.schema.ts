import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const LibroCategoriaCreateManyCategoriaInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateManyCategoriaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateManyCategoriaInput>;
export const LibroCategoriaCreateManyCategoriaInputObjectZodSchema = makeSchema();
