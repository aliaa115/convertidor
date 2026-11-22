import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.number().int(),
			categoriaId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const LibroCategoriaUncheckedCreateInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUncheckedCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUncheckedCreateInput>;
export const LibroCategoriaUncheckedCreateInputObjectZodSchema = makeSchema();
