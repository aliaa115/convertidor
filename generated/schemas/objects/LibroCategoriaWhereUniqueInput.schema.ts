import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCategoriaLibroIdCategoriaIdCompoundUniqueInputObjectSchema as LibroCategoriaLibroIdCategoriaIdCompoundUniqueInputObjectSchema } from "./LibroCategoriaLibroIdCategoriaIdCompoundUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId_categoriaId: z.lazy(() => LibroCategoriaLibroIdCategoriaIdCompoundUniqueInputObjectSchema).optional(),
		})
		.strict();
export const LibroCategoriaWhereUniqueInputObjectSchema: z.ZodType<Prisma.LibroCategoriaWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaWhereUniqueInput>;
export const LibroCategoriaWhereUniqueInputObjectZodSchema = makeSchema();
