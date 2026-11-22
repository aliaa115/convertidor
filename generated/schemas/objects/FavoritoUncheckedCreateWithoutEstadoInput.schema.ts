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
		})
		.strict();
export const FavoritoUncheckedCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.FavoritoUncheckedCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUncheckedCreateWithoutEstadoInput>;
export const FavoritoUncheckedCreateWithoutEstadoInputObjectZodSchema =
	makeSchema();
