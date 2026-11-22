import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateManyTipoInputEnvelopeObjectSchema as ComentarioCreateManyTipoInputEnvelopeObjectSchema } from "./ComentarioCreateManyTipoInputEnvelope.schema.ts";
import { ComentarioCreateOrConnectWithoutTipoInputObjectSchema as ComentarioCreateOrConnectWithoutTipoInputObjectSchema } from "./ComentarioCreateOrConnectWithoutTipoInput.schema.ts";
import { ComentarioCreateWithoutTipoInputObjectSchema as ComentarioCreateWithoutTipoInputObjectSchema } from "./ComentarioCreateWithoutTipoInput.schema.ts";
import { ComentarioUncheckedCreateWithoutTipoInputObjectSchema as ComentarioUncheckedCreateWithoutTipoInputObjectSchema } from "./ComentarioUncheckedCreateWithoutTipoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ComentarioCreateWithoutTipoInputObjectSchema),
					z.lazy(() => ComentarioCreateWithoutTipoInputObjectSchema).array(),
					z.lazy(() => ComentarioUncheckedCreateWithoutTipoInputObjectSchema),
					z
						.lazy(() => ComentarioUncheckedCreateWithoutTipoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ComentarioCreateOrConnectWithoutTipoInputObjectSchema),
					z
						.lazy(() => ComentarioCreateOrConnectWithoutTipoInputObjectSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => ComentarioCreateManyTipoInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
					z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const ComentarioUncheckedCreateNestedManyWithoutTipoInputObjectSchema: z.ZodType<Prisma.ComentarioUncheckedCreateNestedManyWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUncheckedCreateNestedManyWithoutTipoInput>;
export const ComentarioUncheckedCreateNestedManyWithoutTipoInputObjectZodSchema =
	makeSchema();
