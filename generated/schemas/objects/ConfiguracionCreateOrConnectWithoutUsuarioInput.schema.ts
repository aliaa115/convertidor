import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionCreateWithoutUsuarioInputObjectSchema as ConfiguracionCreateWithoutUsuarioInputObjectSchema } from "./ConfiguracionCreateWithoutUsuarioInput.schema.ts";
import { ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema as ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema } from "./ConfiguracionUncheckedCreateWithoutUsuarioInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./ConfiguracionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => ConfiguracionCreateWithoutUsuarioInputObjectSchema), z.lazy(() => ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema)]),
		})
		.strict();
export const ConfiguracionCreateOrConnectWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ConfiguracionCreateOrConnectWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionCreateOrConnectWithoutUsuarioInput>;
export const ConfiguracionCreateOrConnectWithoutUsuarioInputObjectZodSchema = makeSchema();
