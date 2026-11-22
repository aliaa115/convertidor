import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionCreateOrConnectWithoutUsuarioInputObjectSchema as ConfiguracionCreateOrConnectWithoutUsuarioInputObjectSchema } from "./ConfiguracionCreateOrConnectWithoutUsuarioInput.schema.ts";
import { ConfiguracionCreateWithoutUsuarioInputObjectSchema as ConfiguracionCreateWithoutUsuarioInputObjectSchema } from "./ConfiguracionCreateWithoutUsuarioInput.schema.ts";
import { ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema as ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema } from "./ConfiguracionUncheckedCreateWithoutUsuarioInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./ConfiguracionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ConfiguracionCreateWithoutUsuarioInputObjectSchema),
					z.lazy(
						() => ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema,
					),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => ConfiguracionCreateOrConnectWithoutUsuarioInputObjectSchema)
				.optional(),
			connect: z
				.lazy(() => ConfiguracionWhereUniqueInputObjectSchema)
				.optional(),
		})
		.strict();
export const ConfiguracionUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ConfiguracionUncheckedCreateNestedOneWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUncheckedCreateNestedOneWithoutUsuarioInput>;
export const ConfiguracionUncheckedCreateNestedOneWithoutUsuarioInputObjectZodSchema =
	makeSchema();
