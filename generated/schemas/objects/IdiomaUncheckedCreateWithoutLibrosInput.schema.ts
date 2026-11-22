import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			siglas: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const IdiomaUncheckedCreateWithoutLibrosInputObjectSchema: z.ZodType<Prisma.IdiomaUncheckedCreateWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaUncheckedCreateWithoutLibrosInput>;
export const IdiomaUncheckedCreateWithoutLibrosInputObjectZodSchema = makeSchema();
