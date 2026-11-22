import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const CategoriaUncheckedCreateWithoutLibrosInputObjectSchema: z.ZodType<Prisma.CategoriaUncheckedCreateWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaUncheckedCreateWithoutLibrosInput>;
export const CategoriaUncheckedCreateWithoutLibrosInputObjectZodSchema = makeSchema();
