import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateManyEstadoInputEnvelopeObjectSchema as ComentarioCreateManyEstadoInputEnvelopeObjectSchema } from "./ComentarioCreateManyEstadoInputEnvelope.schema.ts";
import { ComentarioCreateOrConnectWithoutEstadoInputObjectSchema as ComentarioCreateOrConnectWithoutEstadoInputObjectSchema } from "./ComentarioCreateOrConnectWithoutEstadoInput.schema.ts";
import { ComentarioCreateWithoutEstadoInputObjectSchema as ComentarioCreateWithoutEstadoInputObjectSchema } from "./ComentarioCreateWithoutEstadoInput.schema.ts";
import { ComentarioScalarWhereInputObjectSchema as ComentarioScalarWhereInputObjectSchema } from "./ComentarioScalarWhereInput.schema.ts";
import { ComentarioUncheckedCreateWithoutEstadoInputObjectSchema as ComentarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./ComentarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { ComentarioUpdateManyWithWhereWithoutEstadoInputObjectSchema as ComentarioUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./ComentarioUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { ComentarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as ComentarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./ComentarioUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { ComentarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as ComentarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./ComentarioUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ComentarioCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => ComentarioCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => ComentarioUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => ComentarioUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => ComentarioCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => ComentarioCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			upsert: z.union([z.lazy(() => ComentarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => ComentarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ComentarioCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => ComentarioWhereUniqueInputObjectSchema), z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => ComentarioWhereUniqueInputObjectSchema), z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => ComentarioWhereUniqueInputObjectSchema), z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => ComentarioWhereUniqueInputObjectSchema), z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => ComentarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => ComentarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => ComentarioUpdateManyWithWhereWithoutEstadoInputObjectSchema), z.lazy(() => ComentarioUpdateManyWithWhereWithoutEstadoInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => ComentarioScalarWhereInputObjectSchema), z.lazy(() => ComentarioScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ComentarioUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateManyWithoutEstadoNestedInput>;
export const ComentarioUpdateManyWithoutEstadoNestedInputObjectZodSchema = makeSchema();
