import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CategoriaCreateManyEstadoInputEnvelopeObjectSchema as CategoriaCreateManyEstadoInputEnvelopeObjectSchema } from "./CategoriaCreateManyEstadoInputEnvelope.schema.ts";
import { CategoriaCreateOrConnectWithoutEstadoInputObjectSchema as CategoriaCreateOrConnectWithoutEstadoInputObjectSchema } from "./CategoriaCreateOrConnectWithoutEstadoInput.schema.ts";
import { CategoriaCreateWithoutEstadoInputObjectSchema as CategoriaCreateWithoutEstadoInputObjectSchema } from "./CategoriaCreateWithoutEstadoInput.schema.ts";
import { CategoriaScalarWhereInputObjectSchema as CategoriaScalarWhereInputObjectSchema } from "./CategoriaScalarWhereInput.schema.ts";
import { CategoriaUncheckedCreateWithoutEstadoInputObjectSchema as CategoriaUncheckedCreateWithoutEstadoInputObjectSchema } from "./CategoriaUncheckedCreateWithoutEstadoInput.schema.ts";
import { CategoriaUpdateManyWithWhereWithoutEstadoInputObjectSchema as CategoriaUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./CategoriaUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { CategoriaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as CategoriaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./CategoriaUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { CategoriaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as CategoriaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./CategoriaUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./CategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => CategoriaCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => CategoriaCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => CategoriaUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => CategoriaUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => CategoriaCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => CategoriaCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => CategoriaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() =>
								CategoriaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => CategoriaCreateManyEstadoInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => CategoriaWhereUniqueInputObjectSchema),
					z.lazy(() => CategoriaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => CategoriaWhereUniqueInputObjectSchema),
					z.lazy(() => CategoriaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => CategoriaWhereUniqueInputObjectSchema),
					z.lazy(() => CategoriaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => CategoriaWhereUniqueInputObjectSchema),
					z.lazy(() => CategoriaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => CategoriaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() =>
								CategoriaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => CategoriaUpdateManyWithWhereWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => CategoriaUpdateManyWithWhereWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => CategoriaScalarWhereInputObjectSchema),
					z.lazy(() => CategoriaScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const CategoriaUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.CategoriaUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaUpdateManyWithoutEstadoNestedInput>;
export const CategoriaUpdateManyWithoutEstadoNestedInputObjectZodSchema =
	makeSchema();
