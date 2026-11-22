import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroEtiquetaCreateManyLibroInputEnvelopeObjectSchema as LibroEtiquetaCreateManyLibroInputEnvelopeObjectSchema } from "./LibroEtiquetaCreateManyLibroInputEnvelope.schema.ts";
import { LibroEtiquetaCreateOrConnectWithoutLibroInputObjectSchema as LibroEtiquetaCreateOrConnectWithoutLibroInputObjectSchema } from "./LibroEtiquetaCreateOrConnectWithoutLibroInput.schema.ts";
import { LibroEtiquetaCreateWithoutLibroInputObjectSchema as LibroEtiquetaCreateWithoutLibroInputObjectSchema } from "./LibroEtiquetaCreateWithoutLibroInput.schema.ts";
import { LibroEtiquetaScalarWhereInputObjectSchema as LibroEtiquetaScalarWhereInputObjectSchema } from "./LibroEtiquetaScalarWhereInput.schema.ts";
import { LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema as LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema } from "./LibroEtiquetaUncheckedCreateWithoutLibroInput.schema.ts";
import { LibroEtiquetaUpdateManyWithWhereWithoutLibroInputObjectSchema as LibroEtiquetaUpdateManyWithWhereWithoutLibroInputObjectSchema } from "./LibroEtiquetaUpdateManyWithWhereWithoutLibroInput.schema.ts";
import { LibroEtiquetaUpdateWithWhereUniqueWithoutLibroInputObjectSchema as LibroEtiquetaUpdateWithWhereUniqueWithoutLibroInputObjectSchema } from "./LibroEtiquetaUpdateWithWhereUniqueWithoutLibroInput.schema.ts";
import { LibroEtiquetaUpsertWithWhereUniqueWithoutLibroInputObjectSchema as LibroEtiquetaUpsertWithWhereUniqueWithoutLibroInputObjectSchema } from "./LibroEtiquetaUpsertWithWhereUniqueWithoutLibroInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./LibroEtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroEtiquetaCreateWithoutLibroInputObjectSchema),
					z
						.lazy(() => LibroEtiquetaCreateWithoutLibroInputObjectSchema)
						.array(),
					z.lazy(
						() => LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema,
					),
					z
						.lazy(
							() => LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(
						() => LibroEtiquetaCreateOrConnectWithoutLibroInputObjectSchema,
					),
					z
						.lazy(
							() => LibroEtiquetaCreateOrConnectWithoutLibroInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() =>
							LibroEtiquetaUpsertWithWhereUniqueWithoutLibroInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroEtiquetaUpsertWithWhereUniqueWithoutLibroInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => LibroEtiquetaCreateManyLibroInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema),
					z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema),
					z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema),
					z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema),
					z.lazy(() => LibroEtiquetaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() =>
							LibroEtiquetaUpdateWithWhereUniqueWithoutLibroInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroEtiquetaUpdateWithWhereUniqueWithoutLibroInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => LibroEtiquetaUpdateManyWithWhereWithoutLibroInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroEtiquetaUpdateManyWithWhereWithoutLibroInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => LibroEtiquetaScalarWhereInputObjectSchema),
					z.lazy(() => LibroEtiquetaScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const LibroEtiquetaUpdateManyWithoutLibroNestedInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpdateManyWithoutLibroNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateManyWithoutLibroNestedInput>;
export const LibroEtiquetaUpdateManyWithoutLibroNestedInputObjectZodSchema =
	makeSchema();
