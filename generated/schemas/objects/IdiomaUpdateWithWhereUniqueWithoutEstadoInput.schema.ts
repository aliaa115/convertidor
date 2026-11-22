import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { IdiomaUncheckedUpdateWithoutEstadoInputObjectSchema as IdiomaUncheckedUpdateWithoutEstadoInputObjectSchema } from "./IdiomaUncheckedUpdateWithoutEstadoInput.schema.ts";
import { IdiomaUpdateWithoutEstadoInputObjectSchema as IdiomaUpdateWithoutEstadoInputObjectSchema } from "./IdiomaUpdateWithoutEstadoInput.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./IdiomaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => IdiomaWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => IdiomaUpdateWithoutEstadoInputObjectSchema),
				z.lazy(() => IdiomaUncheckedUpdateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const IdiomaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.IdiomaUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaUpdateWithWhereUniqueWithoutEstadoInput>;
export const IdiomaUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
