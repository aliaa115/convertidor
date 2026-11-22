import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CategoriaUncheckedUpdateWithoutEstadoInputObjectSchema as CategoriaUncheckedUpdateWithoutEstadoInputObjectSchema } from "./CategoriaUncheckedUpdateWithoutEstadoInput.schema.ts";
import { CategoriaUpdateWithoutEstadoInputObjectSchema as CategoriaUpdateWithoutEstadoInputObjectSchema } from "./CategoriaUpdateWithoutEstadoInput.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./CategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CategoriaWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => CategoriaUpdateWithoutEstadoInputObjectSchema), z.lazy(() => CategoriaUncheckedUpdateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const CategoriaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CategoriaUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaUpdateWithWhereUniqueWithoutEstadoInput>;
export const CategoriaUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
