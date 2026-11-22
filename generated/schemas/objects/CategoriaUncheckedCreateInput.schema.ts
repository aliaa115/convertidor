import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCategoriaUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema as LibroCategoriaUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema } from "./LibroCategoriaUncheckedCreateNestedManyWithoutCategoriaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
			libros: z.lazy(() => LibroCategoriaUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema).optional(),
		})
		.strict();
export const CategoriaUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CategoriaUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaUncheckedCreateInput>;
export const CategoriaUncheckedCreateInputObjectZodSchema = makeSchema();
