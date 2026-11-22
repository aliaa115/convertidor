import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionCreateManyEstadoInputEnvelopeObjectSchema as ConfiguracionCreateManyEstadoInputEnvelopeObjectSchema } from "./ConfiguracionCreateManyEstadoInputEnvelope.schema.ts";
import { ConfiguracionCreateOrConnectWithoutEstadoInputObjectSchema as ConfiguracionCreateOrConnectWithoutEstadoInputObjectSchema } from "./ConfiguracionCreateOrConnectWithoutEstadoInput.schema.ts";
import { ConfiguracionCreateWithoutEstadoInputObjectSchema as ConfiguracionCreateWithoutEstadoInputObjectSchema } from "./ConfiguracionCreateWithoutEstadoInput.schema.ts";
import { ConfiguracionUncheckedCreateWithoutEstadoInputObjectSchema as ConfiguracionUncheckedCreateWithoutEstadoInputObjectSchema } from "./ConfiguracionUncheckedCreateWithoutEstadoInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./ConfiguracionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ConfiguracionCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => ConfiguracionCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => ConfiguracionUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => ConfiguracionUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => ConfiguracionCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => ConfiguracionCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ConfiguracionCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema), z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ConfiguracionUncheckedCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ConfiguracionUncheckedCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUncheckedCreateNestedManyWithoutEstadoInput>;
export const ConfiguracionUncheckedCreateNestedManyWithoutEstadoInputObjectZodSchema = makeSchema();
