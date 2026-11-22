import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionCreateWithoutTipoInputObjectSchema as ConfiguracionCreateWithoutTipoInputObjectSchema } from "./ConfiguracionCreateWithoutTipoInput.schema.ts";
import { ConfiguracionUncheckedCreateWithoutTipoInputObjectSchema as ConfiguracionUncheckedCreateWithoutTipoInputObjectSchema } from "./ConfiguracionUncheckedCreateWithoutTipoInput.schema.ts";
import { ConfiguracionUncheckedUpdateWithoutTipoInputObjectSchema as ConfiguracionUncheckedUpdateWithoutTipoInputObjectSchema } from "./ConfiguracionUncheckedUpdateWithoutTipoInput.schema.ts";
import { ConfiguracionUpdateWithoutTipoInputObjectSchema as ConfiguracionUpdateWithoutTipoInputObjectSchema } from "./ConfiguracionUpdateWithoutTipoInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./ConfiguracionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => ConfiguracionUpdateWithoutTipoInputObjectSchema), z.lazy(() => ConfiguracionUncheckedUpdateWithoutTipoInputObjectSchema)]),
			create: z.union([z.lazy(() => ConfiguracionCreateWithoutTipoInputObjectSchema), z.lazy(() => ConfiguracionUncheckedCreateWithoutTipoInputObjectSchema)]),
		})
		.strict();
export const ConfiguracionUpsertWithWhereUniqueWithoutTipoInputObjectSchema: z.ZodType<Prisma.ConfiguracionUpsertWithWhereUniqueWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUpsertWithWhereUniqueWithoutTipoInput>;
export const ConfiguracionUpsertWithWhereUniqueWithoutTipoInputObjectZodSchema = makeSchema();
