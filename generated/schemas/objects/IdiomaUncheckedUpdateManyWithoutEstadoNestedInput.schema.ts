import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { IdiomaCreateManyEstadoInputEnvelopeObjectSchema as IdiomaCreateManyEstadoInputEnvelopeObjectSchema } from "./IdiomaCreateManyEstadoInputEnvelope.schema.ts";
import { IdiomaCreateOrConnectWithoutEstadoInputObjectSchema as IdiomaCreateOrConnectWithoutEstadoInputObjectSchema } from "./IdiomaCreateOrConnectWithoutEstadoInput.schema.ts";
import { IdiomaCreateWithoutEstadoInputObjectSchema as IdiomaCreateWithoutEstadoInputObjectSchema } from "./IdiomaCreateWithoutEstadoInput.schema.ts";
import { IdiomaScalarWhereInputObjectSchema as IdiomaScalarWhereInputObjectSchema } from "./IdiomaScalarWhereInput.schema.ts";
import { IdiomaUncheckedCreateWithoutEstadoInputObjectSchema as IdiomaUncheckedCreateWithoutEstadoInputObjectSchema } from "./IdiomaUncheckedCreateWithoutEstadoInput.schema.ts";
import { IdiomaUpdateManyWithWhereWithoutEstadoInputObjectSchema as IdiomaUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./IdiomaUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { IdiomaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as IdiomaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./IdiomaUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { IdiomaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as IdiomaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./IdiomaUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./IdiomaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => IdiomaCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => IdiomaCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => IdiomaUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => IdiomaUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => IdiomaCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => IdiomaCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => IdiomaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => IdiomaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => IdiomaCreateManyEstadoInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => IdiomaWhereUniqueInputObjectSchema),
					z.lazy(() => IdiomaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => IdiomaWhereUniqueInputObjectSchema),
					z.lazy(() => IdiomaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => IdiomaWhereUniqueInputObjectSchema),
					z.lazy(() => IdiomaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => IdiomaWhereUniqueInputObjectSchema),
					z.lazy(() => IdiomaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => IdiomaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => IdiomaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => IdiomaUpdateManyWithWhereWithoutEstadoInputObjectSchema),
					z
						.lazy(() => IdiomaUpdateManyWithWhereWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => IdiomaScalarWhereInputObjectSchema),
					z.lazy(() => IdiomaScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const IdiomaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.IdiomaUncheckedUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaUncheckedUpdateManyWithoutEstadoNestedInput>;
export const IdiomaUncheckedUpdateManyWithoutEstadoNestedInputObjectZodSchema =
	makeSchema();
