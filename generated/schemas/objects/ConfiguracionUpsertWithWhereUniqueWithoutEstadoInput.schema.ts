import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionCreateWithoutEstadoInputObjectSchema as ConfiguracionCreateWithoutEstadoInputObjectSchema } from "./ConfiguracionCreateWithoutEstadoInput.schema.ts";
import { ConfiguracionUncheckedCreateWithoutEstadoInputObjectSchema as ConfiguracionUncheckedCreateWithoutEstadoInputObjectSchema } from "./ConfiguracionUncheckedCreateWithoutEstadoInput.schema.ts";
import { ConfiguracionUncheckedUpdateWithoutEstadoInputObjectSchema as ConfiguracionUncheckedUpdateWithoutEstadoInputObjectSchema } from "./ConfiguracionUncheckedUpdateWithoutEstadoInput.schema.ts";
import { ConfiguracionUpdateWithoutEstadoInputObjectSchema as ConfiguracionUpdateWithoutEstadoInputObjectSchema } from "./ConfiguracionUpdateWithoutEstadoInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./ConfiguracionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => ConfiguracionUpdateWithoutEstadoInputObjectSchema), z.lazy(() => ConfiguracionUncheckedUpdateWithoutEstadoInputObjectSchema)]),
			create: z.union([z.lazy(() => ConfiguracionCreateWithoutEstadoInputObjectSchema), z.lazy(() => ConfiguracionUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const ConfiguracionUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ConfiguracionUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUpsertWithWhereUniqueWithoutEstadoInput>;
export const ConfiguracionUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
