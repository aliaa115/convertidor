import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaUncheckedUpdateWithoutCategoriaInputObjectSchema as LibroCategoriaUncheckedUpdateWithoutCategoriaInputObjectSchema } from "./LibroCategoriaUncheckedUpdateWithoutCategoriaInput.schema.ts";
import { LibroCategoriaUpdateWithoutCategoriaInputObjectSchema as LibroCategoriaUpdateWithoutCategoriaInputObjectSchema } from "./LibroCategoriaUpdateWithoutCategoriaInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./LibroCategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => LibroCategoriaUpdateWithoutCategoriaInputObjectSchema),
				z.lazy(
					() => LibroCategoriaUncheckedUpdateWithoutCategoriaInputObjectSchema,
				),
			]),
		})
		.strict();
export const LibroCategoriaUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpdateWithWhereUniqueWithoutCategoriaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateWithWhereUniqueWithoutCategoriaInput>;
export const LibroCategoriaUpdateWithWhereUniqueWithoutCategoriaInputObjectZodSchema =
	makeSchema();
