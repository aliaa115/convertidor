import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CategoriaCreateWithoutEstadoInputObjectSchema as CategoriaCreateWithoutEstadoInputObjectSchema } from "./CategoriaCreateWithoutEstadoInput.schema.ts";
import { CategoriaUncheckedCreateWithoutEstadoInputObjectSchema as CategoriaUncheckedCreateWithoutEstadoInputObjectSchema } from "./CategoriaUncheckedCreateWithoutEstadoInput.schema.ts";
import { CategoriaUncheckedUpdateWithoutEstadoInputObjectSchema as CategoriaUncheckedUpdateWithoutEstadoInputObjectSchema } from "./CategoriaUncheckedUpdateWithoutEstadoInput.schema.ts";
import { CategoriaUpdateWithoutEstadoInputObjectSchema as CategoriaUpdateWithoutEstadoInputObjectSchema } from "./CategoriaUpdateWithoutEstadoInput.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./CategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CategoriaWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => CategoriaUpdateWithoutEstadoInputObjectSchema),
				z.lazy(() => CategoriaUncheckedUpdateWithoutEstadoInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => CategoriaCreateWithoutEstadoInputObjectSchema),
				z.lazy(() => CategoriaUncheckedCreateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const CategoriaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CategoriaUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaUpsertWithWhereUniqueWithoutEstadoInput>;
export const CategoriaUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
