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
export const FavoritoCreateManyEscritorInputObjectSchema: z.ZodType<Prisma.FavoritoCreateManyEscritorInput> = makeSchema() as unknown as z.ZodType<Prisma.FavoritoCreateManyEscritorInput>;
export const FavoritoCreateManyEscritorInputObjectZodSchema = makeSchema();
