import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateManyTipoInputEnvelopeObjectSchema as LibroCreateManyTipoInputEnvelopeObjectSchema } from "./LibroCreateManyTipoInputEnvelope.schema.ts";
import { LibroCreateOrConnectWithoutTipoInputObjectSchema as LibroCreateOrConnectWithoutTipoInputObjectSchema } from "./LibroCreateOrConnectWithoutTipoInput.schema.ts";
import { LibroCreateWithoutTipoInputObjectSchema as LibroCreateWithoutTipoInputObjectSchema } from "./LibroCreateWithoutTipoInput.schema.ts";
import { LibroScalarWhereInputObjectSchema as LibroScalarWhereInputObjectSchema } from "./LibroScalarWhereInput.schema.ts";
import { LibroUncheckedCreateWithoutTipoInputObjectSchema as LibroUncheckedCreateWithoutTipoInputObjectSchema } from "./LibroUncheckedCreateWithoutTipoInput.schema.ts";
import { LibroUpdateManyWithWhereWithoutTipoInputObjectSchema as LibroUpdateManyWithWhereWithoutTipoInputObjectSchema } from "./LibroUpdateManyWithWhereWithoutTipoInput.schema.ts";
import { LibroUpdateWithWhereUniqueWithoutTipoInputObjectSchema as LibroUpdateWithWhereUniqueWithoutTipoInputObjectSchema } from "./LibroUpdateWithWhereUniqueWithoutTipoInput.schema.ts";
import { LibroUpsertWithWhereUniqueWithoutTipoInputObjectSchema as LibroUpsertWithWhereUniqueWithoutTipoInputObjectSchema } from "./LibroUpsertWithWhereUniqueWithoutTipoInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCreateWithoutTipoInputObjectSchema),
					z.lazy(() => LibroCreateWithoutTipoInputObjectSchema).array(),
					z.lazy(() => LibroUncheckedCreateWithoutTipoInputObjectSchema),
					z
						.lazy(() => LibroUncheckedCreateWithoutTipoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => LibroCreateOrConnectWithoutTipoInputObjectSchema),
					z
						.lazy(() => LibroCreateOrConnectWithoutTipoInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => LibroUpsertWithWhereUniqueWithoutTipoInputObjectSchema),
					z
						.lazy(() => LibroUpsertWithWhereUniqueWithoutTipoInputObjectSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => LibroCreateManyTipoInputEnvelopeObjectSchema)
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
					z.lazy(() => LibroUpdateWithWhereUniqueWithoutTipoInputObjectSchema),
					z
						.lazy(() => LibroUpdateWithWhereUniqueWithoutTipoInputObjectSchema)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => LibroUpdateManyWithWhereWithoutTipoInputObjectSchema),
					z
						.lazy(() => LibroUpdateManyWithWhereWithoutTipoInputObjectSchema)
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
export const LibroUncheckedUpdateManyWithoutTipoNestedInputObjectSchema: z.ZodType<Prisma.LibroUncheckedUpdateManyWithoutTipoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUncheckedUpdateManyWithoutTipoNestedInput>;
export const LibroUncheckedUpdateManyWithoutTipoNestedInputObjectZodSchema =
	makeSchema();
