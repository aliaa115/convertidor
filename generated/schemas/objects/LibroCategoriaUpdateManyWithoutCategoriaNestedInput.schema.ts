import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaCreateManyCategoriaInputEnvelopeObjectSchema as LibroCategoriaCreateManyCategoriaInputEnvelopeObjectSchema } from "./LibroCategoriaCreateManyCategoriaInputEnvelope.schema.ts";
import { LibroCategoriaCreateOrConnectWithoutCategoriaInputObjectSchema as LibroCategoriaCreateOrConnectWithoutCategoriaInputObjectSchema } from "./LibroCategoriaCreateOrConnectWithoutCategoriaInput.schema.ts";
import { LibroCategoriaCreateWithoutCategoriaInputObjectSchema as LibroCategoriaCreateWithoutCategoriaInputObjectSchema } from "./LibroCategoriaCreateWithoutCategoriaInput.schema.ts";
import { LibroCategoriaScalarWhereInputObjectSchema as LibroCategoriaScalarWhereInputObjectSchema } from "./LibroCategoriaScalarWhereInput.schema.ts";
import { LibroCategoriaUncheckedCreateWithoutCategoriaInputObjectSchema as LibroCategoriaUncheckedCreateWithoutCategoriaInputObjectSchema } from "./LibroCategoriaUncheckedCreateWithoutCategoriaInput.schema.ts";
import { LibroCategoriaUpdateManyWithWhereWithoutCategoriaInputObjectSchema as LibroCategoriaUpdateManyWithWhereWithoutCategoriaInputObjectSchema } from "./LibroCategoriaUpdateManyWithWhereWithoutCategoriaInput.schema.ts";
import { LibroCategoriaUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema as LibroCategoriaUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema } from "./LibroCategoriaUpdateWithWhereUniqueWithoutCategoriaInput.schema.ts";
import { LibroCategoriaUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema as LibroCategoriaUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema } from "./LibroCategoriaUpsertWithWhereUniqueWithoutCategoriaInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./LibroCategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCategoriaCreateWithoutCategoriaInputObjectSchema),
					z
						.lazy(() => LibroCategoriaCreateWithoutCategoriaInputObjectSchema)
						.array(),
					z.lazy(
						() =>
							LibroCategoriaUncheckedCreateWithoutCategoriaInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroCategoriaUncheckedCreateWithoutCategoriaInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(
						() =>
							LibroCategoriaCreateOrConnectWithoutCategoriaInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroCategoriaCreateOrConnectWithoutCategoriaInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() =>
							LibroCategoriaUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroCategoriaUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => LibroCategoriaCreateManyCategoriaInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema),
					z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema),
					z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema),
					z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema),
					z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() =>
							LibroCategoriaUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroCategoriaUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() =>
							LibroCategoriaUpdateManyWithWhereWithoutCategoriaInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroCategoriaUpdateManyWithWhereWithoutCategoriaInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => LibroCategoriaScalarWhereInputObjectSchema),
					z.lazy(() => LibroCategoriaScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const LibroCategoriaUpdateManyWithoutCategoriaNestedInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpdateManyWithoutCategoriaNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateManyWithoutCategoriaNestedInput>;
export const LibroCategoriaUpdateManyWithoutCategoriaNestedInputObjectZodSchema =
	makeSchema();
