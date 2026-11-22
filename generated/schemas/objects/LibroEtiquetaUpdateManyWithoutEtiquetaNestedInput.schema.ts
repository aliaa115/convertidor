import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroEtiquetaCreateManyEtiquetaInputEnvelopeObjectSchema as LibroEtiquetaCreateManyEtiquetaInputEnvelopeObjectSchema } from "./LibroEtiquetaCreateManyEtiquetaInputEnvelope.schema.ts";
import { LibroEtiquetaCreateOrConnectWithoutEtiquetaInputObjectSchema as LibroEtiquetaCreateOrConnectWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaCreateOrConnectWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema as LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaCreateWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaScalarWhereInputObjectSchema as LibroEtiquetaScalarWhereInputObjectSchema } from "./LibroEtiquetaScalarWhereInput.schema.ts";
import { LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema as LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaUncheckedCreateWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaUpdateManyWithWhereWithoutEtiquetaInputObjectSchema as LibroEtiquetaUpdateManyWithWhereWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaUpdateManyWithWhereWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInputObjectSchema as LibroEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInputObjectSchema as LibroEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./LibroEtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema),
					z
						.lazy(() => LibroEtiquetaCreateWithoutEtiquetaInputObjectSchema)
						.array(),
					z.lazy(
						() => LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(
						() => LibroEtiquetaCreateOrConnectWithoutEtiquetaInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroEtiquetaCreateOrConnectWithoutEtiquetaInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() =>
							LibroEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => LibroEtiquetaCreateManyEtiquetaInputEnvelopeObjectSchema)
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
							LibroEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() =>
							LibroEtiquetaUpdateManyWithWhereWithoutEtiquetaInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroEtiquetaUpdateManyWithWhereWithoutEtiquetaInputObjectSchema,
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
export const LibroEtiquetaUpdateManyWithoutEtiquetaNestedInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpdateManyWithoutEtiquetaNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateManyWithoutEtiquetaNestedInput>;
export const LibroEtiquetaUpdateManyWithoutEtiquetaNestedInputObjectZodSchema =
	makeSchema();
