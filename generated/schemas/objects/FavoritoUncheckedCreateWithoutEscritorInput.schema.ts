import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libroId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const FavoritoUncheckedCreateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.FavoritoUncheckedCreateWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUncheckedCreateWithoutEscritorInput>;
export const FavoritoUncheckedCreateWithoutEscritorInputObjectZodSchema = makeSchema();
