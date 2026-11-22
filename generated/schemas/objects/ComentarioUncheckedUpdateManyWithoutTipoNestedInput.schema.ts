import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateManyTipoInputEnvelopeObjectSchema as ComentarioCreateManyTipoInputEnvelopeObjectSchema } from "./ComentarioCreateManyTipoInputEnvelope.schema.ts";
import { ComentarioCreateOrConnectWithoutTipoInputObjectSchema as ComentarioCreateOrConnectWithoutTipoInputObjectSchema } from "./ComentarioCreateOrConnectWithoutTipoInput.schema.ts";
import { ComentarioCreateWithoutTipoInputObjectSchema as ComentarioCreateWithoutTipoInputObjectSchema } from "./ComentarioCreateWithoutTipoInput.schema.ts";
import { ComentarioScalarWhereInputObjectSchema as ComentarioScalarWhereInputObjectSchema } from "./ComentarioScalarWhereInput.schema.ts";
import { ComentarioUncheckedCreateWithoutTipoInputObjectSchema as ComentarioUncheckedCreateWithoutTipoInputObjectSchema } from "./ComentarioUncheckedCreateWithoutTipoInput.schema.ts";
import { ComentarioUpdateManyWithWhereWithoutTipoInputObjectSchema as ComentarioUpdateManyWithWhereWithoutTipoInputObjectSchema } from "./ComentarioUpdateManyWithWhereWithoutTipoInput.schema.ts";
import { ComentarioUpdateWithWhereUniqueWithoutTipoInputObjectSchema as ComentarioUpdateWithWhereUniqueWithoutTipoInputObjectSchema } from "./ComentarioUpdateWithWhereUniqueWithoutTipoInput.schema.ts";
import { ComentarioUpsertWithWhereUniqueWithoutTipoInputObjectSchema as ComentarioUpsertWithWhereUniqueWithoutTipoInputObjectSchema } from "./ComentarioUpsertWithWhereUniqueWithoutTipoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ComentarioCreateWithoutTipoInputObjectSchema),
					z.lazy(() => ComentarioCreateWithoutTipoInputObjectSchema).array(),
					z.lazy(() => ComentarioUncheckedCreateWithoutTipoInputObjectSchema),
					z.lazy(() => ComentarioUncheckedCreateWithoutTipoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => ComentarioCreateOrConnectWithoutTipoInputObjectSchema), z.lazy(() => ComentarioCreateOrConnectWithoutTipoInputObjectSchema).array()]).optional(),
			upsert: z.union([z.lazy(() => ComentarioUpsertWithWhereUniqueWithoutTipoInputObjectSchema), z.lazy(() => ComentarioUpsertWithWhereUniqueWithoutTipoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ComentarioCreateManyTipoInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => ComentarioWhereUniqueInputObjectSchema), z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => ComentarioWhereUniqueInputObjectSchema), z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => ComentarioWhereUniqueInputObjectSchema), z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => ComentarioWhereUniqueInputObjectSchema), z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => ComentarioUpdateWithWhereUniqueWithoutTipoInputObjectSchema), z.lazy(() => ComentarioUpdateWithWhereUniqueWithoutTipoInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => ComentarioUpdateManyWithWhereWithoutTipoInputObjectSchema), z.lazy(() => ComentarioUpdateManyWithWhereWithoutTipoInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => ComentarioScalarWhereInputObjectSchema), z.lazy(() => ComentarioScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ComentarioUncheckedUpdateManyWithoutTipoNestedInputObjectSchema: z.ZodType<Prisma.ComentarioUncheckedUpdateManyWithoutTipoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUncheckedUpdateManyWithoutTipoNestedInput>;
export const ComentarioUncheckedUpdateManyWithoutTipoNestedInputObjectZodSchema = makeSchema();
