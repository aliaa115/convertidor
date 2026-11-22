import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionCreateManyEstadoInputEnvelopeObjectSchema as ConfiguracionCreateManyEstadoInputEnvelopeObjectSchema } from "./ConfiguracionCreateManyEstadoInputEnvelope.schema.ts";
import { ConfiguracionCreateOrConnectWithoutEstadoInputObjectSchema as ConfiguracionCreateOrConnectWithoutEstadoInputObjectSchema } from "./ConfiguracionCreateOrConnectWithoutEstadoInput.schema.ts";
import { ConfiguracionCreateWithoutEstadoInputObjectSchema as ConfiguracionCreateWithoutEstadoInputObjectSchema } from "./ConfiguracionCreateWithoutEstadoInput.schema.ts";
import { ConfiguracionScalarWhereInputObjectSchema as ConfiguracionScalarWhereInputObjectSchema } from "./ConfiguracionScalarWhereInput.schema.ts";
import { ConfiguracionUncheckedCreateWithoutEstadoInputObjectSchema as ConfiguracionUncheckedCreateWithoutEstadoInputObjectSchema } from "./ConfiguracionUncheckedCreateWithoutEstadoInput.schema.ts";
import { ConfiguracionUpdateManyWithWhereWithoutEstadoInputObjectSchema as ConfiguracionUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./ConfiguracionUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { ConfiguracionUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as ConfiguracionUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./ConfiguracionUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { ConfiguracionUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as ConfiguracionUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./ConfiguracionUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
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
			upsert: z
				.union([z.lazy(() => ConfiguracionUpsertWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => ConfiguracionUpsertWithWhereUniqueWithoutEstadoInputObjectSchema).array()])
				.optional(),
			createMany: z.lazy(() => ConfiguracionCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema), z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema), z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema), z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema), z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema).array()]).optional(),
			update: z
				.union([z.lazy(() => ConfiguracionUpdateWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => ConfiguracionUpdateWithWhereUniqueWithoutEstadoInputObjectSchema).array()])
				.optional(),
			updateMany: z
				.union([z.lazy(() => ConfiguracionUpdateManyWithWhereWithoutEstadoInputObjectSchema), z.lazy(() => ConfiguracionUpdateManyWithWhereWithoutEstadoInputObjectSchema).array()])
				.optional(),
			deleteMany: z.union([z.lazy(() => ConfiguracionScalarWhereInputObjectSchema), z.lazy(() => ConfiguracionScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ConfiguracionUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.ConfiguracionUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUpdateManyWithoutEstadoNestedInput>;
export const ConfiguracionUpdateManyWithoutEstadoNestedInputObjectZodSchema = makeSchema();
