import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			escritorId: z.number().int().optional().nullable(),
			libroId: z.number().int().optional().nullable(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const FavoritoUncheckedCreateInputObjectSchema: z.ZodType<Prisma.FavoritoUncheckedCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUncheckedCreateInput>;
export const FavoritoUncheckedCreateInputObjectZodSchema = makeSchema();
