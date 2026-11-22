import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritorId: z.number().int().optional().nullable(),
			libroId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const FavoritoCreateManyInputObjectSchema: z.ZodType<Prisma.FavoritoCreateManyInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoCreateManyInput>;
export const FavoritoCreateManyInputObjectZodSchema = makeSchema();
