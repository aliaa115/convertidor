import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionCreateManyTipoInputEnvelopeObjectSchema as ConfiguracionCreateManyTipoInputEnvelopeObjectSchema } from "./ConfiguracionCreateManyTipoInputEnvelope.schema.ts";
import { ConfiguracionCreateOrConnectWithoutTipoInputObjectSchema as ConfiguracionCreateOrConnectWithoutTipoInputObjectSchema } from "./ConfiguracionCreateOrConnectWithoutTipoInput.schema.ts";
import { ConfiguracionCreateWithoutTipoInputObjectSchema as ConfiguracionCreateWithoutTipoInputObjectSchema } from "./ConfiguracionCreateWithoutTipoInput.schema.ts";
import { ConfiguracionScalarWhereInputObjectSchema as ConfiguracionScalarWhereInputObjectSchema } from "./ConfiguracionScalarWhereInput.schema.ts";
import { ConfiguracionUncheckedCreateWithoutTipoInputObjectSchema as ConfiguracionUncheckedCreateWithoutTipoInputObjectSchema } from "./ConfiguracionUncheckedCreateWithoutTipoInput.schema.ts";
import { ConfiguracionUpdateManyWithWhereWithoutTipoInputObjectSchema as ConfiguracionUpdateManyWithWhereWithoutTipoInputObjectSchema } from "./ConfiguracionUpdateManyWithWhereWithoutTipoInput.schema.ts";
import { ConfiguracionUpdateWithWhereUniqueWithoutTipoInputObjectSchema as ConfiguracionUpdateWithWhereUniqueWithoutTipoInputObjectSchema } from "./ConfiguracionUpdateWithWhereUniqueWithoutTipoInput.schema.ts";
import { ConfiguracionUpsertWithWhereUniqueWithoutTipoInputObjectSchema as ConfiguracionUpsertWithWhereUniqueWithoutTipoInputObjectSchema } from "./ConfiguracionUpsertWithWhereUniqueWithoutTipoInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./ConfiguracionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ConfiguracionCreateWithoutTipoInputObjectSchema),
					z.lazy(() => ConfiguracionCreateWithoutTipoInputObjectSchema).array(),
					z.lazy(() => ConfiguracionUncheckedCreateWithoutTipoInputObjectSchema),
					z.lazy(() => ConfiguracionUncheckedCreateWithoutTipoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => ConfiguracionCreateOrConnectWithoutTipoInputObjectSchema), z.lazy(() => ConfiguracionCreateOrConnectWithoutTipoInputObjectSchema).array()]).optional(),
			upsert: z.union([z.lazy(() => ConfiguracionUpsertWithWhereUniqueWithoutTipoInputObjectSchema), z.lazy(() => ConfiguracionUpsertWithWhereUniqueWithoutTipoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ConfiguracionCreateManyTipoInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema), z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema), z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema), z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema), z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => ConfiguracionUpdateWithWhereUniqueWithoutTipoInputObjectSchema), z.lazy(() => ConfiguracionUpdateWithWhereUniqueWithoutTipoInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => ConfiguracionUpdateManyWithWhereWithoutTipoInputObjectSchema), z.lazy(() => ConfiguracionUpdateManyWithWhereWithoutTipoInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => ConfiguracionScalarWhereInputObjectSchema), z.lazy(() => ConfiguracionScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ConfiguracionUpdateManyWithoutTipoNestedInputObjectSchema: z.ZodType<Prisma.ConfiguracionUpdateManyWithoutTipoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUpdateManyWithoutTipoNestedInput>;
export const ConfiguracionUpdateManyWithoutTipoNestedInputObjectZodSchema = makeSchema();
