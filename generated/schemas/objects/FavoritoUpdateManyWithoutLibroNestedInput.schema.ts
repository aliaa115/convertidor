import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { FavoritoCreateManyLibroInputEnvelopeObjectSchema as FavoritoCreateManyLibroInputEnvelopeObjectSchema } from "./FavoritoCreateManyLibroInputEnvelope.schema.ts";
import { FavoritoCreateOrConnectWithoutLibroInputObjectSchema as FavoritoCreateOrConnectWithoutLibroInputObjectSchema } from "./FavoritoCreateOrConnectWithoutLibroInput.schema.ts";
import { FavoritoCreateWithoutLibroInputObjectSchema as FavoritoCreateWithoutLibroInputObjectSchema } from "./FavoritoCreateWithoutLibroInput.schema.ts";
import { FavoritoScalarWhereInputObjectSchema as FavoritoScalarWhereInputObjectSchema } from "./FavoritoScalarWhereInput.schema.ts";
import { FavoritoUncheckedCreateWithoutLibroInputObjectSchema as FavoritoUncheckedCreateWithoutLibroInputObjectSchema } from "./FavoritoUncheckedCreateWithoutLibroInput.schema.ts";
import { FavoritoUpdateManyWithWhereWithoutLibroInputObjectSchema as FavoritoUpdateManyWithWhereWithoutLibroInputObjectSchema } from "./FavoritoUpdateManyWithWhereWithoutLibroInput.schema.ts";
import { FavoritoUpdateWithWhereUniqueWithoutLibroInputObjectSchema as FavoritoUpdateWithWhereUniqueWithoutLibroInputObjectSchema } from "./FavoritoUpdateWithWhereUniqueWithoutLibroInput.schema.ts";
import { FavoritoUpsertWithWhereUniqueWithoutLibroInputObjectSchema as FavoritoUpsertWithWhereUniqueWithoutLibroInputObjectSchema } from "./FavoritoUpsertWithWhereUniqueWithoutLibroInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => FavoritoCreateWithoutLibroInputObjectSchema),
					z.lazy(() => FavoritoCreateWithoutLibroInputObjectSchema).array(),
					z.lazy(() => FavoritoUncheckedCreateWithoutLibroInputObjectSchema),
					z
						.lazy(() => FavoritoUncheckedCreateWithoutLibroInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => FavoritoCreateOrConnectWithoutLibroInputObjectSchema),
					z
						.lazy(() => FavoritoCreateOrConnectWithoutLibroInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => FavoritoUpsertWithWhereUniqueWithoutLibroInputObjectSchema,
					),
					z
						.lazy(
							() => FavoritoUpsertWithWhereUniqueWithoutLibroInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => FavoritoCreateManyLibroInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => FavoritoWhereUniqueInputObjectSchema),
					z.lazy(() => FavoritoWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => FavoritoWhereUniqueInputObjectSchema),
					z.lazy(() => FavoritoWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => FavoritoWhereUniqueInputObjectSchema),
					z.lazy(() => FavoritoWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => FavoritoWhereUniqueInputObjectSchema),
					z.lazy(() => FavoritoWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => FavoritoUpdateWithWhereUniqueWithoutLibroInputObjectSchema,
					),
					z
						.lazy(
							() => FavoritoUpdateWithWhereUniqueWithoutLibroInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => FavoritoUpdateManyWithWhereWithoutLibroInputObjectSchema,
					),
					z
						.lazy(
							() => FavoritoUpdateManyWithWhereWithoutLibroInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => FavoritoScalarWhereInputObjectSchema),
					z.lazy(() => FavoritoScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const FavoritoUpdateManyWithoutLibroNestedInputObjectSchema: z.ZodType<Prisma.FavoritoUpdateManyWithoutLibroNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUpdateManyWithoutLibroNestedInput>;
export const FavoritoUpdateManyWithoutLibroNestedInputObjectZodSchema =
	makeSchema();
