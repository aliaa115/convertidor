import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateManyParrafoInputEnvelopeObjectSchema as ComentarioCreateManyParrafoInputEnvelopeObjectSchema } from "./ComentarioCreateManyParrafoInputEnvelope.schema.ts";
import { ComentarioCreateOrConnectWithoutParrafoInputObjectSchema as ComentarioCreateOrConnectWithoutParrafoInputObjectSchema } from "./ComentarioCreateOrConnectWithoutParrafoInput.schema.ts";
import { ComentarioCreateWithoutParrafoInputObjectSchema as ComentarioCreateWithoutParrafoInputObjectSchema } from "./ComentarioCreateWithoutParrafoInput.schema.ts";
import { ComentarioScalarWhereInputObjectSchema as ComentarioScalarWhereInputObjectSchema } from "./ComentarioScalarWhereInput.schema.ts";
import { ComentarioUncheckedCreateWithoutParrafoInputObjectSchema as ComentarioUncheckedCreateWithoutParrafoInputObjectSchema } from "./ComentarioUncheckedCreateWithoutParrafoInput.schema.ts";
import { ComentarioUpdateManyWithWhereWithoutParrafoInputObjectSchema as ComentarioUpdateManyWithWhereWithoutParrafoInputObjectSchema } from "./ComentarioUpdateManyWithWhereWithoutParrafoInput.schema.ts";
import { ComentarioUpdateWithWhereUniqueWithoutParrafoInputObjectSchema as ComentarioUpdateWithWhereUniqueWithoutParrafoInputObjectSchema } from "./ComentarioUpdateWithWhereUniqueWithoutParrafoInput.schema.ts";
import { ComentarioUpsertWithWhereUniqueWithoutParrafoInputObjectSchema as ComentarioUpsertWithWhereUniqueWithoutParrafoInputObjectSchema } from "./ComentarioUpsertWithWhereUniqueWithoutParrafoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ComentarioCreateWithoutParrafoInputObjectSchema),
					z.lazy(() => ComentarioCreateWithoutParrafoInputObjectSchema).array(),
					z.lazy(
						() => ComentarioUncheckedCreateWithoutParrafoInputObjectSchema,
					),
					z
						.lazy(
							() => ComentarioUncheckedCreateWithoutParrafoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(
						() => ComentarioCreateOrConnectWithoutParrafoInputObjectSchema,
					),
					z
						.lazy(
							() => ComentarioCreateOrConnectWithoutParrafoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() =>
							ComentarioUpsertWithWhereUniqueWithoutParrafoInputObjectSchema,
					),
					z
						.lazy(
							() =>
								ComentarioUpsertWithWhereUniqueWithoutParrafoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => ComentarioCreateManyParrafoInputEnvelopeObjectSchema)
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
						() =>
							ComentarioUpdateWithWhereUniqueWithoutParrafoInputObjectSchema,
					),
					z
						.lazy(
							() =>
								ComentarioUpdateWithWhereUniqueWithoutParrafoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => ComentarioUpdateManyWithWhereWithoutParrafoInputObjectSchema,
					),
					z
						.lazy(
							() =>
								ComentarioUpdateManyWithWhereWithoutParrafoInputObjectSchema,
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
export const ComentarioUpdateManyWithoutParrafoNestedInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateManyWithoutParrafoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateManyWithoutParrafoNestedInput>;
export const ComentarioUpdateManyWithoutParrafoNestedInputObjectZodSchema =
	makeSchema();
