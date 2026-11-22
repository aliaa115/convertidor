import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionUncheckedUpdateWithoutTipoInputObjectSchema as ConfiguracionUncheckedUpdateWithoutTipoInputObjectSchema } from "./ConfiguracionUncheckedUpdateWithoutTipoInput.schema.ts";
import { ConfiguracionUpdateWithoutTipoInputObjectSchema as ConfiguracionUpdateWithoutTipoInputObjectSchema } from "./ConfiguracionUpdateWithoutTipoInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./ConfiguracionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => ConfiguracionUpdateWithoutTipoInputObjectSchema),
				z.lazy(() => ConfiguracionUncheckedUpdateWithoutTipoInputObjectSchema),
			]),
		})
		.strict();
export const ConfiguracionUpdateWithWhereUniqueWithoutTipoInputObjectSchema: z.ZodType<Prisma.ConfiguracionUpdateWithWhereUniqueWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUpdateWithWhereUniqueWithoutTipoInput>;
export const ConfiguracionUpdateWithWhereUniqueWithoutTipoInputObjectZodSchema =
	makeSchema();
