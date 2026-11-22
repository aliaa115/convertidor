import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionCreateManyTipoInputEnvelopeObjectSchema as ConfiguracionCreateManyTipoInputEnvelopeObjectSchema } from "./ConfiguracionCreateManyTipoInputEnvelope.schema.ts";
import { ConfiguracionCreateOrConnectWithoutTipoInputObjectSchema as ConfiguracionCreateOrConnectWithoutTipoInputObjectSchema } from "./ConfiguracionCreateOrConnectWithoutTipoInput.schema.ts";
import { ConfiguracionCreateWithoutTipoInputObjectSchema as ConfiguracionCreateWithoutTipoInputObjectSchema } from "./ConfiguracionCreateWithoutTipoInput.schema.ts";
import { ConfiguracionUncheckedCreateWithoutTipoInputObjectSchema as ConfiguracionUncheckedCreateWithoutTipoInputObjectSchema } from "./ConfiguracionUncheckedCreateWithoutTipoInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./ConfiguracionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ConfiguracionCreateWithoutTipoInputObjectSchema),
					z.lazy(() => ConfiguracionCreateWithoutTipoInputObjectSchema).array(),
					z.lazy(
						() => ConfiguracionUncheckedCreateWithoutTipoInputObjectSchema,
					),
					z
						.lazy(
							() => ConfiguracionUncheckedCreateWithoutTipoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(
						() => ConfiguracionCreateOrConnectWithoutTipoInputObjectSchema,
					),
					z
						.lazy(
							() => ConfiguracionCreateOrConnectWithoutTipoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => ConfiguracionCreateManyTipoInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema),
					z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const ConfiguracionUncheckedCreateNestedManyWithoutTipoInputObjectSchema: z.ZodType<Prisma.ConfiguracionUncheckedCreateNestedManyWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUncheckedCreateNestedManyWithoutTipoInput>;
export const ConfiguracionUncheckedCreateNestedManyWithoutTipoInputObjectZodSchema =
	makeSchema();
