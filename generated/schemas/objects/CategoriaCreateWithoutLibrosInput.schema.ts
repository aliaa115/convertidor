import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateNestedOneWithoutCategoriasInputObjectSchema as EstadoCreateNestedOneWithoutCategoriasInputObjectSchema } from "./EstadoCreateNestedOneWithoutCategoriasInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutCategoriasInputObjectSchema).optional(),
		})
		.strict();
export const CategoriaCreateWithoutLibrosInputObjectSchema: z.ZodType<Prisma.CategoriaCreateWithoutLibrosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaCreateWithoutLibrosInput>;
export const CategoriaCreateWithoutLibrosInputObjectZodSchema = makeSchema();
