import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionUncheckedUpdateWithoutEstadoInputObjectSchema as ConfiguracionUncheckedUpdateWithoutEstadoInputObjectSchema } from "./ConfiguracionUncheckedUpdateWithoutEstadoInput.schema.ts";
import { ConfiguracionUpdateWithoutEstadoInputObjectSchema as ConfiguracionUpdateWithoutEstadoInputObjectSchema } from "./ConfiguracionUpdateWithoutEstadoInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./ConfiguracionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => ConfiguracionUpdateWithoutEstadoInputObjectSchema), z.lazy(() => ConfiguracionUncheckedUpdateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const ConfiguracionUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ConfiguracionUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUpdateWithWhereUniqueWithoutEstadoInput>;
export const ConfiguracionUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
