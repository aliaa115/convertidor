import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroUncheckedUpdateWithoutCategoriasInputObjectSchema as LibroUncheckedUpdateWithoutCategoriasInputObjectSchema } from "./LibroUncheckedUpdateWithoutCategoriasInput.schema.ts";
import { LibroUpdateWithoutCategoriasInputObjectSchema as LibroUpdateWithoutCategoriasInputObjectSchema } from "./LibroUpdateWithoutCategoriasInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => LibroUpdateWithoutCategoriasInputObjectSchema), z.lazy(() => LibroUncheckedUpdateWithoutCategoriasInputObjectSchema)]),
		})
		.strict();
export const LibroUpdateToOneWithWhereWithoutCategoriasInputObjectSchema: z.ZodType<Prisma.LibroUpdateToOneWithWhereWithoutCategoriasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateToOneWithWhereWithoutCategoriasInput>;
export const LibroUpdateToOneWithWhereWithoutCategoriasInputObjectZodSchema = makeSchema();
