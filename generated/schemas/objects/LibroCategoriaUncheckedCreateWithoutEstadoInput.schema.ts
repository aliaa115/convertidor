import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.number().int(),
			categoriaId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict();
export const LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUncheckedCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUncheckedCreateWithoutEstadoInput>;
export const LibroCategoriaUncheckedCreateWithoutEstadoInputObjectZodSchema =
	makeSchema();
