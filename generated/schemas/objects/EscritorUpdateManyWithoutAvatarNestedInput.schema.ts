import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateManyAvatarInputEnvelopeObjectSchema as EscritorCreateManyAvatarInputEnvelopeObjectSchema } from "./EscritorCreateManyAvatarInputEnvelope.schema.ts";
import { EscritorCreateOrConnectWithoutAvatarInputObjectSchema as EscritorCreateOrConnectWithoutAvatarInputObjectSchema } from "./EscritorCreateOrConnectWithoutAvatarInput.schema.ts";
import { EscritorCreateWithoutAvatarInputObjectSchema as EscritorCreateWithoutAvatarInputObjectSchema } from "./EscritorCreateWithoutAvatarInput.schema.ts";
import { EscritorScalarWhereInputObjectSchema as EscritorScalarWhereInputObjectSchema } from "./EscritorScalarWhereInput.schema.ts";
import { EscritorUncheckedCreateWithoutAvatarInputObjectSchema as EscritorUncheckedCreateWithoutAvatarInputObjectSchema } from "./EscritorUncheckedCreateWithoutAvatarInput.schema.ts";
import { EscritorUpdateManyWithWhereWithoutAvatarInputObjectSchema as EscritorUpdateManyWithWhereWithoutAvatarInputObjectSchema } from "./EscritorUpdateManyWithWhereWithoutAvatarInput.schema.ts";
import { EscritorUpdateWithWhereUniqueWithoutAvatarInputObjectSchema as EscritorUpdateWithWhereUniqueWithoutAvatarInputObjectSchema } from "./EscritorUpdateWithWhereUniqueWithoutAvatarInput.schema.ts";
import { EscritorUpsertWithWhereUniqueWithoutAvatarInputObjectSchema as EscritorUpsertWithWhereUniqueWithoutAvatarInputObjectSchema } from "./EscritorUpsertWithWhereUniqueWithoutAvatarInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EscritorCreateWithoutAvatarInputObjectSchema),
					z.lazy(() => EscritorCreateWithoutAvatarInputObjectSchema).array(),
					z.lazy(() => EscritorUncheckedCreateWithoutAvatarInputObjectSchema),
					z.lazy(() => EscritorUncheckedCreateWithoutAvatarInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => EscritorCreateOrConnectWithoutAvatarInputObjectSchema), z.lazy(() => EscritorCreateOrConnectWithoutAvatarInputObjectSchema).array()]).optional(),
			upsert: z.union([z.lazy(() => EscritorUpsertWithWhereUniqueWithoutAvatarInputObjectSchema), z.lazy(() => EscritorUpsertWithWhereUniqueWithoutAvatarInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => EscritorCreateManyAvatarInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => EscritorWhereUniqueInputObjectSchema), z.lazy(() => EscritorWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => EscritorWhereUniqueInputObjectSchema), z.lazy(() => EscritorWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => EscritorWhereUniqueInputObjectSchema), z.lazy(() => EscritorWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => EscritorWhereUniqueInputObjectSchema), z.lazy(() => EscritorWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => EscritorUpdateWithWhereUniqueWithoutAvatarInputObjectSchema), z.lazy(() => EscritorUpdateWithWhereUniqueWithoutAvatarInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => EscritorUpdateManyWithWhereWithoutAvatarInputObjectSchema), z.lazy(() => EscritorUpdateManyWithWhereWithoutAvatarInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => EscritorScalarWhereInputObjectSchema), z.lazy(() => EscritorScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const EscritorUpdateManyWithoutAvatarNestedInputObjectSchema: z.ZodType<Prisma.EscritorUpdateManyWithoutAvatarNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateManyWithoutAvatarNestedInput>;
export const EscritorUpdateManyWithoutAvatarNestedInputObjectZodSchema = makeSchema();
