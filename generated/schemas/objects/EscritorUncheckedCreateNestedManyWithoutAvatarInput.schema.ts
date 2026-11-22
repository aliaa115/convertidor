import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateManyAvatarInputEnvelopeObjectSchema as EscritorCreateManyAvatarInputEnvelopeObjectSchema } from "./EscritorCreateManyAvatarInputEnvelope.schema.ts";
import { EscritorCreateOrConnectWithoutAvatarInputObjectSchema as EscritorCreateOrConnectWithoutAvatarInputObjectSchema } from "./EscritorCreateOrConnectWithoutAvatarInput.schema.ts";
import { EscritorCreateWithoutAvatarInputObjectSchema as EscritorCreateWithoutAvatarInputObjectSchema } from "./EscritorCreateWithoutAvatarInput.schema.ts";
import { EscritorUncheckedCreateWithoutAvatarInputObjectSchema as EscritorUncheckedCreateWithoutAvatarInputObjectSchema } from "./EscritorUncheckedCreateWithoutAvatarInput.schema.ts";
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
			createMany: z.lazy(() => EscritorCreateManyAvatarInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => EscritorWhereUniqueInputObjectSchema), z.lazy(() => EscritorWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const EscritorUncheckedCreateNestedManyWithoutAvatarInputObjectSchema: z.ZodType<Prisma.EscritorUncheckedCreateNestedManyWithoutAvatarInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUncheckedCreateNestedManyWithoutAvatarInput>;
export const EscritorUncheckedCreateNestedManyWithoutAvatarInputObjectZodSchema = makeSchema();
