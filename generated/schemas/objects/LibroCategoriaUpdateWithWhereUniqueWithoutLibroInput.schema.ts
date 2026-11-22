import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCategoriaUncheckedUpdateWithoutLibroInputObjectSchema as LibroCategoriaUncheckedUpdateWithoutLibroInputObjectSchema } from "./LibroCategoriaUncheckedUpdateWithoutLibroInput.schema.ts";
import { LibroCategoriaUpdateWithoutLibroInputObjectSchema as LibroCategoriaUpdateWithoutLibroInputObjectSchema } from "./LibroCategoriaUpdateWithoutLibroInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./LibroCategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => LibroCategoriaUpdateWithoutLibroInputObjectSchema), z.lazy(() => LibroCategoriaUncheckedUpdateWithoutLibroInputObjectSchema)]),
		})
		.strict();
export const LibroCategoriaUpdateWithWhereUniqueWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpdateWithWhereUniqueWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateWithWhereUniqueWithoutLibroInput>;
export const LibroCategoriaUpdateWithWhereUniqueWithoutLibroInputObjectZodSchema = makeSchema();
