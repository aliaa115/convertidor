import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateManyPadreInputEnvelopeObjectSchema as ComentarioCreateManyPadreInputEnvelopeObjectSchema } from "./ComentarioCreateManyPadreInputEnvelope.schema.ts";
import { ComentarioCreateOrConnectWithoutPadreInputObjectSchema as ComentarioCreateOrConnectWithoutPadreInputObjectSchema } from "./ComentarioCreateOrConnectWithoutPadreInput.schema.ts";
import { ComentarioCreateWithoutPadreInputObjectSchema as ComentarioCreateWithoutPadreInputObjectSchema } from "./ComentarioCreateWithoutPadreInput.schema.ts";
import { ComentarioUncheckedCreateWithoutPadreInputObjectSchema as ComentarioUncheckedCreateWithoutPadreInputObjectSchema } from "./ComentarioUncheckedCreateWithoutPadreInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ComentarioCreateWithoutPadreInputObjectSchema),
					z.lazy(() => ComentarioCreateWithoutPadreInputObjectSchema).array(),
					z.lazy(() => ComentarioUncheckedCreateWithoutPadreInputObjectSchema),
					z
						.lazy(() => ComentarioUncheckedCreateWithoutPadreInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ComentarioCreateOrConnectWithoutPadreInputObjectSchema),
					z
						.lazy(() => ComentarioCreateOrConnectWithoutPadreInputObjectSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => ComentarioCreateManyPadreInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
					z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const ComentarioUncheckedCreateNestedManyWithoutPadreInputObjectSchema: z.ZodType<Prisma.ComentarioUncheckedCreateNestedManyWithoutPadreInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUncheckedCreateNestedManyWithoutPadreInput>;
export const ComentarioUncheckedCreateNestedManyWithoutPadreInputObjectZodSchema =
	makeSchema();
