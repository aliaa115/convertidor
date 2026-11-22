import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaCreateManyEstadoInputEnvelopeObjectSchema as LibroCategoriaCreateManyEstadoInputEnvelopeObjectSchema } from "./LibroCategoriaCreateManyEstadoInputEnvelope.schema.ts";
import { LibroCategoriaCreateOrConnectWithoutEstadoInputObjectSchema as LibroCategoriaCreateOrConnectWithoutEstadoInputObjectSchema } from "./LibroCategoriaCreateOrConnectWithoutEstadoInput.schema.ts";
import { LibroCategoriaCreateWithoutEstadoInputObjectSchema as LibroCategoriaCreateWithoutEstadoInputObjectSchema } from "./LibroCategoriaCreateWithoutEstadoInput.schema.ts";
import { LibroCategoriaScalarWhereInputObjectSchema as LibroCategoriaScalarWhereInputObjectSchema } from "./LibroCategoriaScalarWhereInput.schema.ts";
import { LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema as LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema } from "./LibroCategoriaUncheckedCreateWithoutEstadoInput.schema.ts";
import { LibroCategoriaUpdateManyWithWhereWithoutEstadoInputObjectSchema as LibroCategoriaUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./LibroCategoriaUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { LibroCategoriaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as LibroCategoriaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./LibroCategoriaUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { LibroCategoriaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as LibroCategoriaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./LibroCategoriaUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./LibroCategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCategoriaCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => LibroCategoriaCreateWithoutEstadoInputObjectSchema)
						.array(),
					z.lazy(
						() => LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(
						() => LibroCategoriaCreateOrConnectWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => LibroCategoriaCreateOrConnectWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() =>
							LibroCategoriaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroCategoriaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => LibroCategoriaCreateManyEstadoInputEnvelopeObjectSchema)
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
							LibroCategoriaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroCategoriaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() =>
							LibroCategoriaUpdateManyWithWhereWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() =>
								LibroCategoriaUpdateManyWithWhereWithoutEstadoInputObjectSchema,
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
export const LibroCategoriaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUncheckedUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUncheckedUpdateManyWithoutEstadoNestedInput>;
export const LibroCategoriaUncheckedUpdateManyWithoutEstadoNestedInputObjectZodSchema =
	makeSchema();
