import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateManyEstadoInputEnvelopeObjectSchema as LibroCreateManyEstadoInputEnvelopeObjectSchema } from "./LibroCreateManyEstadoInputEnvelope.schema.ts";
import { LibroCreateOrConnectWithoutEstadoInputObjectSchema as LibroCreateOrConnectWithoutEstadoInputObjectSchema } from "./LibroCreateOrConnectWithoutEstadoInput.schema.ts";
import { LibroCreateWithoutEstadoInputObjectSchema as LibroCreateWithoutEstadoInputObjectSchema } from "./LibroCreateWithoutEstadoInput.schema.ts";
import { LibroScalarWhereInputObjectSchema as LibroScalarWhereInputObjectSchema } from "./LibroScalarWhereInput.schema.ts";
import { LibroUncheckedCreateWithoutEstadoInputObjectSchema as LibroUncheckedCreateWithoutEstadoInputObjectSchema } from "./LibroUncheckedCreateWithoutEstadoInput.schema.ts";
import { LibroUpdateManyWithWhereWithoutEstadoInputObjectSchema as LibroUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./LibroUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { LibroUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as LibroUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./LibroUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { LibroUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as LibroUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./LibroUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => LibroCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => LibroUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => LibroUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => LibroCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => LibroCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => LibroUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => LibroUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => LibroCreateManyEstadoInputEnvelopeObjectSchema)
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
						() => LibroUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => LibroUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => LibroUpdateManyWithWhereWithoutEstadoInputObjectSchema),
					z
						.lazy(() => LibroUpdateManyWithWhereWithoutEstadoInputObjectSchema)
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
export const LibroUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.LibroUncheckedUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUncheckedUpdateManyWithoutEstadoNestedInput>;
export const LibroUncheckedUpdateManyWithoutEstadoNestedInputObjectZodSchema =
	makeSchema();
