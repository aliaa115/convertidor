import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			categoriaId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const LibroCategoriaUncheckedCreateWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUncheckedCreateWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUncheckedCreateWithoutLibroInput>;
export const LibroCategoriaUncheckedCreateWithoutLibroInputObjectZodSchema = makeSchema();
