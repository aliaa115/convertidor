import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { IdiomaCreateWithoutEstadoInputObjectSchema as IdiomaCreateWithoutEstadoInputObjectSchema } from "./IdiomaCreateWithoutEstadoInput.schema.ts";
import { IdiomaUncheckedCreateWithoutEstadoInputObjectSchema as IdiomaUncheckedCreateWithoutEstadoInputObjectSchema } from "./IdiomaUncheckedCreateWithoutEstadoInput.schema.ts";
import { IdiomaUncheckedUpdateWithoutEstadoInputObjectSchema as IdiomaUncheckedUpdateWithoutEstadoInputObjectSchema } from "./IdiomaUncheckedUpdateWithoutEstadoInput.schema.ts";
import { IdiomaUpdateWithoutEstadoInputObjectSchema as IdiomaUpdateWithoutEstadoInputObjectSchema } from "./IdiomaUpdateWithoutEstadoInput.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./IdiomaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => IdiomaWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => IdiomaUpdateWithoutEstadoInputObjectSchema), z.lazy(() => IdiomaUncheckedUpdateWithoutEstadoInputObjectSchema)]),
			create: z.union([z.lazy(() => IdiomaCreateWithoutEstadoInputObjectSchema), z.lazy(() => IdiomaUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const IdiomaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.IdiomaUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaUpsertWithWhereUniqueWithoutEstadoInput>;
export const IdiomaUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
