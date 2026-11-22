import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaCreateWithoutCategoriaInputObjectSchema as LibroCategoriaCreateWithoutCategoriaInputObjectSchema } from "./LibroCategoriaCreateWithoutCategoriaInput.schema.ts";
import { LibroCategoriaUncheckedCreateWithoutCategoriaInputObjectSchema as LibroCategoriaUncheckedCreateWithoutCategoriaInputObjectSchema } from "./LibroCategoriaUncheckedCreateWithoutCategoriaInput.schema.ts";
import { LibroCategoriaUncheckedUpdateWithoutCategoriaInputObjectSchema as LibroCategoriaUncheckedUpdateWithoutCategoriaInputObjectSchema } from "./LibroCategoriaUncheckedUpdateWithoutCategoriaInput.schema.ts";
import { LibroCategoriaUpdateWithoutCategoriaInputObjectSchema as LibroCategoriaUpdateWithoutCategoriaInputObjectSchema } from "./LibroCategoriaUpdateWithoutCategoriaInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./LibroCategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => LibroCategoriaUpdateWithoutCategoriaInputObjectSchema),
				z.lazy(
					() => LibroCategoriaUncheckedUpdateWithoutCategoriaInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => LibroCategoriaCreateWithoutCategoriaInputObjectSchema),
				z.lazy(
					() => LibroCategoriaUncheckedCreateWithoutCategoriaInputObjectSchema,
				),
			]),
		})
		.strict();
export const LibroCategoriaUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpsertWithWhereUniqueWithoutCategoriaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpsertWithWhereUniqueWithoutCategoriaInput>;
export const LibroCategoriaUpsertWithWhereUniqueWithoutCategoriaInputObjectZodSchema =
	makeSchema();
