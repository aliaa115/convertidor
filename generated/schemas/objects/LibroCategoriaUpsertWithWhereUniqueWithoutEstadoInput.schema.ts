import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaCreateWithoutEstadoInputObjectSchema as LibroCategoriaCreateWithoutEstadoInputObjectSchema } from "./LibroCategoriaCreateWithoutEstadoInput.schema.ts";
import { LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema as LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema } from "./LibroCategoriaUncheckedCreateWithoutEstadoInput.schema.ts";
import { LibroCategoriaUncheckedUpdateWithoutEstadoInputObjectSchema as LibroCategoriaUncheckedUpdateWithoutEstadoInputObjectSchema } from "./LibroCategoriaUncheckedUpdateWithoutEstadoInput.schema.ts";
import { LibroCategoriaUpdateWithoutEstadoInputObjectSchema as LibroCategoriaUpdateWithoutEstadoInputObjectSchema } from "./LibroCategoriaUpdateWithoutEstadoInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./LibroCategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => LibroCategoriaUpdateWithoutEstadoInputObjectSchema),
				z.lazy(
					() => LibroCategoriaUncheckedUpdateWithoutEstadoInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => LibroCategoriaCreateWithoutEstadoInputObjectSchema),
				z.lazy(
					() => LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema,
				),
			]),
		})
		.strict();
export const LibroCategoriaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpsertWithWhereUniqueWithoutEstadoInput>;
export const LibroCategoriaUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
