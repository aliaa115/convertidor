import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateManyPadreInputEnvelopeObjectSchema as ComentarioCreateManyPadreInputEnvelopeObjectSchema } from "./ComentarioCreateManyPadreInputEnvelope.schema.ts";
import { ComentarioCreateOrConnectWithoutPadreInputObjectSchema as ComentarioCreateOrConnectWithoutPadreInputObjectSchema } from "./ComentarioCreateOrConnectWithoutPadreInput.schema.ts";
import { ComentarioCreateWithoutPadreInputObjectSchema as ComentarioCreateWithoutPadreInputObjectSchema } from "./ComentarioCreateWithoutPadreInput.schema.ts";
import { ComentarioScalarWhereInputObjectSchema as ComentarioScalarWhereInputObjectSchema } from "./ComentarioScalarWhereInput.schema.ts";
import { ComentarioUncheckedCreateWithoutPadreInputObjectSchema as ComentarioUncheckedCreateWithoutPadreInputObjectSchema } from "./ComentarioUncheckedCreateWithoutPadreInput.schema.ts";
import { ComentarioUpdateManyWithWhereWithoutPadreInputObjectSchema as ComentarioUpdateManyWithWhereWithoutPadreInputObjectSchema } from "./ComentarioUpdateManyWithWhereWithoutPadreInput.schema.ts";
import { ComentarioUpdateWithWhereUniqueWithoutPadreInputObjectSchema as ComentarioUpdateWithWhereUniqueWithoutPadreInputObjectSchema } from "./ComentarioUpdateWithWhereUniqueWithoutPadreInput.schema.ts";
import { ComentarioUpsertWithWhereUniqueWithoutPadreInputObjectSchema as ComentarioUpsertWithWhereUniqueWithoutPadreInputObjectSchema } from "./ComentarioUpsertWithWhereUniqueWithoutPadreInput.schema.ts";
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
			upsert: z
				.union([
					z.lazy(
						() => ComentarioUpsertWithWhereUniqueWithoutPadreInputObjectSchema,
					),
					z
						.lazy(
							() =>
								ComentarioUpsertWithWhereUniqueWithoutPadreInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => ComentarioCreateManyPadreInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
					z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
					z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
					z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
					z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => ComentarioUpdateWithWhereUniqueWithoutPadreInputObjectSchema,
					),
					z
						.lazy(
							() =>
								ComentarioUpdateWithWhereUniqueWithoutPadreInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => ComentarioUpdateManyWithWhereWithoutPadreInputObjectSchema,
					),
					z
						.lazy(
							() => ComentarioUpdateManyWithWhereWithoutPadreInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => ComentarioScalarWhereInputObjectSchema),
					z.lazy(() => ComentarioScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const ComentarioUpdateManyWithoutPadreNestedInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateManyWithoutPadreNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateManyWithoutPadreNestedInput>;
export const ComentarioUpdateManyWithoutPadreNestedInputObjectZodSchema =
	makeSchema();
