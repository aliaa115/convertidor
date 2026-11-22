import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritorId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const FavoritoUncheckedCreateWithoutLibroInputObjectSchema: z.ZodType<Prisma.FavoritoUncheckedCreateWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUncheckedCreateWithoutLibroInput>;
export const FavoritoUncheckedCreateWithoutLibroInputObjectZodSchema = makeSchema();
