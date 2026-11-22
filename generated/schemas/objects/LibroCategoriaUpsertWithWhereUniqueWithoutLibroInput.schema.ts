import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaCreateWithoutLibroInputObjectSchema as LibroCategoriaCreateWithoutLibroInputObjectSchema } from "./LibroCategoriaCreateWithoutLibroInput.schema.ts";
import { LibroCategoriaUncheckedCreateWithoutLibroInputObjectSchema as LibroCategoriaUncheckedCreateWithoutLibroInputObjectSchema } from "./LibroCategoriaUncheckedCreateWithoutLibroInput.schema.ts";
import { LibroCategoriaUncheckedUpdateWithoutLibroInputObjectSchema as LibroCategoriaUncheckedUpdateWithoutLibroInputObjectSchema } from "./LibroCategoriaUncheckedUpdateWithoutLibroInput.schema.ts";
import { LibroCategoriaUpdateWithoutLibroInputObjectSchema as LibroCategoriaUpdateWithoutLibroInputObjectSchema } from "./LibroCategoriaUpdateWithoutLibroInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./LibroCategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => LibroCategoriaUpdateWithoutLibroInputObjectSchema),
				z.lazy(
					() => LibroCategoriaUncheckedUpdateWithoutLibroInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => LibroCategoriaCreateWithoutLibroInputObjectSchema),
				z.lazy(
					() => LibroCategoriaUncheckedCreateWithoutLibroInputObjectSchema,
				),
			]),
		})
		.strict();
export const LibroCategoriaUpsertWithWhereUniqueWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpsertWithWhereUniqueWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpsertWithWhereUniqueWithoutLibroInput>;
export const LibroCategoriaUpsertWithWhereUniqueWithoutLibroInputObjectZodSchema =
	makeSchema();
