import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateWithoutCategoriasInputObjectSchema as LibroCreateWithoutCategoriasInputObjectSchema } from "./LibroCreateWithoutCategoriasInput.schema.ts";
import { LibroUncheckedCreateWithoutCategoriasInputObjectSchema as LibroUncheckedCreateWithoutCategoriasInputObjectSchema } from "./LibroUncheckedCreateWithoutCategoriasInput.schema.ts";
import { LibroUncheckedUpdateWithoutCategoriasInputObjectSchema as LibroUncheckedUpdateWithoutCategoriasInputObjectSchema } from "./LibroUncheckedUpdateWithoutCategoriasInput.schema.ts";
import { LibroUpdateWithoutCategoriasInputObjectSchema as LibroUpdateWithoutCategoriasInputObjectSchema } from "./LibroUpdateWithoutCategoriasInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => LibroUpdateWithoutCategoriasInputObjectSchema), z.lazy(() => LibroUncheckedUpdateWithoutCategoriasInputObjectSchema)]),
			create: z.union([z.lazy(() => LibroCreateWithoutCategoriasInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutCategoriasInputObjectSchema)]),
			where: z.lazy(() => LibroWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroUpsertWithoutCategoriasInputObjectSchema: z.ZodType<Prisma.LibroUpsertWithoutCategoriasInput> = makeSchema() as unknown as z.ZodType<Prisma.LibroUpsertWithoutCategoriasInput>;
export const LibroUpsertWithoutCategoriasInputObjectZodSchema = makeSchema();
