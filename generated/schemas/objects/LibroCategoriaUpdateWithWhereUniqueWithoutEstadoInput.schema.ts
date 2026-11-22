import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaUncheckedUpdateWithoutEstadoInputObjectSchema as LibroCategoriaUncheckedUpdateWithoutEstadoInputObjectSchema } from "./LibroCategoriaUncheckedUpdateWithoutEstadoInput.schema.ts";
import { LibroCategoriaUpdateWithoutEstadoInputObjectSchema as LibroCategoriaUpdateWithoutEstadoInputObjectSchema } from "./LibroCategoriaUpdateWithoutEstadoInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./LibroCategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => LibroCategoriaUpdateWithoutEstadoInputObjectSchema),
				z.lazy(
					() => LibroCategoriaUncheckedUpdateWithoutEstadoInputObjectSchema,
				),
			]),
		})
		.strict();
export const LibroCategoriaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateWithWhereUniqueWithoutEstadoInput>;
export const LibroCategoriaUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
