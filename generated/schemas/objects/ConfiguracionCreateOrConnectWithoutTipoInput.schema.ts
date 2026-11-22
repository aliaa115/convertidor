import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionCreateWithoutTipoInputObjectSchema as ConfiguracionCreateWithoutTipoInputObjectSchema } from "./ConfiguracionCreateWithoutTipoInput.schema.ts";
import { ConfiguracionUncheckedCreateWithoutTipoInputObjectSchema as ConfiguracionUncheckedCreateWithoutTipoInputObjectSchema } from "./ConfiguracionUncheckedCreateWithoutTipoInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./ConfiguracionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => ConfiguracionCreateWithoutTipoInputObjectSchema), z.lazy(() => ConfiguracionUncheckedCreateWithoutTipoInputObjectSchema)]),
		})
		.strict();
export const ConfiguracionCreateOrConnectWithoutTipoInputObjectSchema: z.ZodType<Prisma.ConfiguracionCreateOrConnectWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionCreateOrConnectWithoutTipoInput>;
export const ConfiguracionCreateOrConnectWithoutTipoInputObjectZodSchema = makeSchema();
