import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			categoriaId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const LibroCategoriaCreateManyLibroInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateManyLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateManyLibroInput>;
export const LibroCategoriaCreateManyLibroInputObjectZodSchema = makeSchema();
