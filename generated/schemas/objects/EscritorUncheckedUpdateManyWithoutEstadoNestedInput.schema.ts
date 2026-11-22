import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateManyEstadoInputEnvelopeObjectSchema as EscritorCreateManyEstadoInputEnvelopeObjectSchema } from "./EscritorCreateManyEstadoInputEnvelope.schema.ts";
import { EscritorCreateOrConnectWithoutEstadoInputObjectSchema as EscritorCreateOrConnectWithoutEstadoInputObjectSchema } from "./EscritorCreateOrConnectWithoutEstadoInput.schema.ts";
import { EscritorCreateWithoutEstadoInputObjectSchema as EscritorCreateWithoutEstadoInputObjectSchema } from "./EscritorCreateWithoutEstadoInput.schema.ts";
import { EscritorScalarWhereInputObjectSchema as EscritorScalarWhereInputObjectSchema } from "./EscritorScalarWhereInput.schema.ts";
import { EscritorUncheckedCreateWithoutEstadoInputObjectSchema as EscritorUncheckedCreateWithoutEstadoInputObjectSchema } from "./EscritorUncheckedCreateWithoutEstadoInput.schema.ts";
import { EscritorUpdateManyWithWhereWithoutEstadoInputObjectSchema as EscritorUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./EscritorUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { EscritorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as EscritorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./EscritorUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { EscritorUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as EscritorUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./EscritorUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EscritorCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => EscritorCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => EscritorUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => EscritorUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => EscritorCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => EscritorCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => EscritorUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => EscritorUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => EscritorCreateManyEstadoInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => EscritorWhereUniqueInputObjectSchema),
					z.lazy(() => EscritorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => EscritorWhereUniqueInputObjectSchema),
					z.lazy(() => EscritorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => EscritorWhereUniqueInputObjectSchema),
					z.lazy(() => EscritorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => EscritorWhereUniqueInputObjectSchema),
					z.lazy(() => EscritorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => EscritorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => EscritorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => EscritorUpdateManyWithWhereWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => EscritorUpdateManyWithWhereWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => EscritorScalarWhereInputObjectSchema),
					z.lazy(() => EscritorScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const EscritorUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.EscritorUncheckedUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUncheckedUpdateManyWithoutEstadoNestedInput>;
export const EscritorUncheckedUpdateManyWithoutEstadoNestedInputObjectZodSchema =
	makeSchema();
