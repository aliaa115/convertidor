import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateManyEscritorInputEnvelopeObjectSchema as ComentarioCreateManyEscritorInputEnvelopeObjectSchema } from "./ComentarioCreateManyEscritorInputEnvelope.schema.ts";
import { ComentarioCreateOrConnectWithoutEscritorInputObjectSchema as ComentarioCreateOrConnectWithoutEscritorInputObjectSchema } from "./ComentarioCreateOrConnectWithoutEscritorInput.schema.ts";
import { ComentarioCreateWithoutEscritorInputObjectSchema as ComentarioCreateWithoutEscritorInputObjectSchema } from "./ComentarioCreateWithoutEscritorInput.schema.ts";
import { ComentarioScalarWhereInputObjectSchema as ComentarioScalarWhereInputObjectSchema } from "./ComentarioScalarWhereInput.schema.ts";
import { ComentarioUncheckedCreateWithoutEscritorInputObjectSchema as ComentarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./ComentarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { ComentarioUpdateManyWithWhereWithoutEscritorInputObjectSchema as ComentarioUpdateManyWithWhereWithoutEscritorInputObjectSchema } from "./ComentarioUpdateManyWithWhereWithoutEscritorInput.schema.ts";
import { ComentarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema as ComentarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema } from "./ComentarioUpdateWithWhereUniqueWithoutEscritorInput.schema.ts";
import { ComentarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema as ComentarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema } from "./ComentarioUpsertWithWhereUniqueWithoutEscritorInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ComentarioCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => ComentarioCreateWithoutEscritorInputObjectSchema).array(),
					z.lazy(() => ComentarioUncheckedCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => ComentarioUncheckedCreateWithoutEscritorInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => ComentarioCreateOrConnectWithoutEscritorInputObjectSchema), z.lazy(() => ComentarioCreateOrConnectWithoutEscritorInputObjectSchema).array()]).optional(),
			upsert: z
				.union([z.lazy(() => ComentarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema), z.lazy(() => ComentarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema).array()])
				.optional(),
			createMany: z.lazy(() => ComentarioCreateManyEscritorInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => ComentarioWhereUniqueInputObjectSchema), z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => ComentarioWhereUniqueInputObjectSchema), z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => ComentarioWhereUniqueInputObjectSchema), z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => ComentarioWhereUniqueInputObjectSchema), z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array()]).optional(),
			update: z
				.union([z.lazy(() => ComentarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema), z.lazy(() => ComentarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema).array()])
				.optional(),
			updateMany: z
				.union([z.lazy(() => ComentarioUpdateManyWithWhereWithoutEscritorInputObjectSchema), z.lazy(() => ComentarioUpdateManyWithWhereWithoutEscritorInputObjectSchema).array()])
				.optional(),
			deleteMany: z.union([z.lazy(() => ComentarioScalarWhereInputObjectSchema), z.lazy(() => ComentarioScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ComentarioUpdateManyWithoutEscritorNestedInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateManyWithoutEscritorNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateManyWithoutEscritorNestedInput>;
export const ComentarioUpdateManyWithoutEscritorNestedInputObjectZodSchema = makeSchema();
