import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateManyIdiomaInputEnvelopeObjectSchema as LibroCreateManyIdiomaInputEnvelopeObjectSchema } from "./LibroCreateManyIdiomaInputEnvelope.schema.ts";
import { LibroCreateOrConnectWithoutIdiomaInputObjectSchema as LibroCreateOrConnectWithoutIdiomaInputObjectSchema } from "./LibroCreateOrConnectWithoutIdiomaInput.schema.ts";
import { LibroCreateWithoutIdiomaInputObjectSchema as LibroCreateWithoutIdiomaInputObjectSchema } from "./LibroCreateWithoutIdiomaInput.schema.ts";
import { LibroScalarWhereInputObjectSchema as LibroScalarWhereInputObjectSchema } from "./LibroScalarWhereInput.schema.ts";
import { LibroUncheckedCreateWithoutIdiomaInputObjectSchema as LibroUncheckedCreateWithoutIdiomaInputObjectSchema } from "./LibroUncheckedCreateWithoutIdiomaInput.schema.ts";
import { LibroUpdateManyWithWhereWithoutIdiomaInputObjectSchema as LibroUpdateManyWithWhereWithoutIdiomaInputObjectSchema } from "./LibroUpdateManyWithWhereWithoutIdiomaInput.schema.ts";
import { LibroUpdateWithWhereUniqueWithoutIdiomaInputObjectSchema as LibroUpdateWithWhereUniqueWithoutIdiomaInputObjectSchema } from "./LibroUpdateWithWhereUniqueWithoutIdiomaInput.schema.ts";
import { LibroUpsertWithWhereUniqueWithoutIdiomaInputObjectSchema as LibroUpsertWithWhereUniqueWithoutIdiomaInputObjectSchema } from "./LibroUpsertWithWhereUniqueWithoutIdiomaInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCreateWithoutIdiomaInputObjectSchema),
					z.lazy(() => LibroCreateWithoutIdiomaInputObjectSchema).array(),
					z.lazy(() => LibroUncheckedCreateWithoutIdiomaInputObjectSchema),
					z
						.lazy(() => LibroUncheckedCreateWithoutIdiomaInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => LibroCreateOrConnectWithoutIdiomaInputObjectSchema),
					z
						.lazy(() => LibroCreateOrConnectWithoutIdiomaInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => LibroUpsertWithWhereUniqueWithoutIdiomaInputObjectSchema,
					),
					z
						.lazy(
							() => LibroUpsertWithWhereUniqueWithoutIdiomaInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => LibroCreateManyIdiomaInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => LibroWhereUniqueInputObjectSchema),
					z.lazy(() => LibroWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => LibroWhereUniqueInputObjectSchema),
					z.lazy(() => LibroWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => LibroWhereUniqueInputObjectSchema),
					z.lazy(() => LibroWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => LibroWhereUniqueInputObjectSchema),
					z.lazy(() => LibroWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => LibroUpdateWithWhereUniqueWithoutIdiomaInputObjectSchema,
					),
					z
						.lazy(
							() => LibroUpdateWithWhereUniqueWithoutIdiomaInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => LibroUpdateManyWithWhereWithoutIdiomaInputObjectSchema),
					z
						.lazy(() => LibroUpdateManyWithWhereWithoutIdiomaInputObjectSchema)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => LibroScalarWhereInputObjectSchema),
					z.lazy(() => LibroScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const LibroUpdateManyWithoutIdiomaNestedInputObjectSchema: z.ZodType<Prisma.LibroUpdateManyWithoutIdiomaNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateManyWithoutIdiomaNestedInput>;
export const LibroUpdateManyWithoutIdiomaNestedInputObjectZodSchema =
	makeSchema();
