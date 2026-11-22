import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorUncheckedUpdateWithoutEstadoInputObjectSchema as EscritorUncheckedUpdateWithoutEstadoInputObjectSchema } from "./EscritorUncheckedUpdateWithoutEstadoInput.schema.ts";
import { EscritorUpdateWithoutEstadoInputObjectSchema as EscritorUpdateWithoutEstadoInputObjectSchema } from "./EscritorUpdateWithoutEstadoInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => EscritorUpdateWithoutEstadoInputObjectSchema),
				z.lazy(() => EscritorUncheckedUpdateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const EscritorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.EscritorUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateWithWhereUniqueWithoutEstadoInput>;
export const EscritorUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
