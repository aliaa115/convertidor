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
export const FavoritoCreateManyLibroInputObjectSchema: z.ZodType<Prisma.FavoritoCreateManyLibroInput> = makeSchema() as unknown as z.ZodType<Prisma.FavoritoCreateManyLibroInput>;
export const FavoritoCreateManyLibroInputObjectZodSchema = makeSchema();
