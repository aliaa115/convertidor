import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.number().int(),
			categoriaId: z.number().int(),
		})
		.strict();
export const LibroCategoriaLibroIdCategoriaIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.LibroCategoriaLibroIdCategoriaIdCompoundUniqueInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaLibroIdCategoriaIdCompoundUniqueInput>;
export const LibroCategoriaLibroIdCategoriaIdCompoundUniqueInputObjectZodSchema =
	makeSchema();
