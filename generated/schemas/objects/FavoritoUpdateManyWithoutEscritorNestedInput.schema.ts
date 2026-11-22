import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { FavoritoCreateManyEscritorInputEnvelopeObjectSchema as FavoritoCreateManyEscritorInputEnvelopeObjectSchema } from "./FavoritoCreateManyEscritorInputEnvelope.schema.ts";
import { FavoritoCreateOrConnectWithoutEscritorInputObjectSchema as FavoritoCreateOrConnectWithoutEscritorInputObjectSchema } from "./FavoritoCreateOrConnectWithoutEscritorInput.schema.ts";
import { FavoritoCreateWithoutEscritorInputObjectSchema as FavoritoCreateWithoutEscritorInputObjectSchema } from "./FavoritoCreateWithoutEscritorInput.schema.ts";
import { FavoritoScalarWhereInputObjectSchema as FavoritoScalarWhereInputObjectSchema } from "./FavoritoScalarWhereInput.schema.ts";
import { FavoritoUncheckedCreateWithoutEscritorInputObjectSchema as FavoritoUncheckedCreateWithoutEscritorInputObjectSchema } from "./FavoritoUncheckedCreateWithoutEscritorInput.schema.ts";
import { FavoritoUpdateManyWithWhereWithoutEscritorInputObjectSchema as FavoritoUpdateManyWithWhereWithoutEscritorInputObjectSchema } from "./FavoritoUpdateManyWithWhereWithoutEscritorInput.schema.ts";
import { FavoritoUpdateWithWhereUniqueWithoutEscritorInputObjectSchema as FavoritoUpdateWithWhereUniqueWithoutEscritorInputObjectSchema } from "./FavoritoUpdateWithWhereUniqueWithoutEscritorInput.schema.ts";
import { FavoritoUpsertWithWhereUniqueWithoutEscritorInputObjectSchema as FavoritoUpsertWithWhereUniqueWithoutEscritorInputObjectSchema } from "./FavoritoUpsertWithWhereUniqueWithoutEscritorInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => FavoritoCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => FavoritoCreateWithoutEscritorInputObjectSchema).array(),
					z.lazy(() => FavoritoUncheckedCreateWithoutEscritorInputObjectSchema),
					z
						.lazy(() => FavoritoUncheckedCreateWithoutEscritorInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => FavoritoCreateOrConnectWithoutEscritorInputObjectSchema),
					z
						.lazy(() => FavoritoCreateOrConnectWithoutEscritorInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => FavoritoUpsertWithWhereUniqueWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() =>
								FavoritoUpsertWithWhereUniqueWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => FavoritoCreateManyEscritorInputEnvelopeObjectSchema)
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
						() => FavoritoUpdateWithWhereUniqueWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() =>
								FavoritoUpdateWithWhereUniqueWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => FavoritoUpdateManyWithWhereWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() => FavoritoUpdateManyWithWhereWithoutEscritorInputObjectSchema,
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
export const FavoritoUpdateManyWithoutEscritorNestedInputObjectSchema: z.ZodType<Prisma.FavoritoUpdateManyWithoutEscritorNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUpdateManyWithoutEscritorNestedInput>;
export const FavoritoUpdateManyWithoutEscritorNestedInputObjectZodSchema =
	makeSchema();
