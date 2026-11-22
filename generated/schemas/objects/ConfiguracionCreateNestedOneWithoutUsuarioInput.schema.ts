import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionCreateOrConnectWithoutUsuarioInputObjectSchema as ConfiguracionCreateOrConnectWithoutUsuarioInputObjectSchema } from "./ConfiguracionCreateOrConnectWithoutUsuarioInput.schema.ts";
import { ConfiguracionCreateWithoutUsuarioInputObjectSchema as ConfiguracionCreateWithoutUsuarioInputObjectSchema } from "./ConfiguracionCreateWithoutUsuarioInput.schema.ts";
import { ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema as ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema } from "./ConfiguracionUncheckedCreateWithoutUsuarioInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./ConfiguracionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => ConfiguracionCreateWithoutUsuarioInputObjectSchema), z.lazy(() => ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => ConfiguracionCreateOrConnectWithoutUsuarioInputObjectSchema).optional(),
			connect: z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const ConfiguracionCreateNestedOneWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ConfiguracionCreateNestedOneWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionCreateNestedOneWithoutUsuarioInput>;
export const ConfiguracionCreateNestedOneWithoutUsuarioInputObjectZodSchema = makeSchema();
