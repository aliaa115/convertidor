import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { FavoritoCreateManyEstadoInputEnvelopeObjectSchema as FavoritoCreateManyEstadoInputEnvelopeObjectSchema } from "./FavoritoCreateManyEstadoInputEnvelope.schema.ts";
import { FavoritoCreateOrConnectWithoutEstadoInputObjectSchema as FavoritoCreateOrConnectWithoutEstadoInputObjectSchema } from "./FavoritoCreateOrConnectWithoutEstadoInput.schema.ts";
import { FavoritoCreateWithoutEstadoInputObjectSchema as FavoritoCreateWithoutEstadoInputObjectSchema } from "./FavoritoCreateWithoutEstadoInput.schema.ts";
import { FavoritoScalarWhereInputObjectSchema as FavoritoScalarWhereInputObjectSchema } from "./FavoritoScalarWhereInput.schema.ts";
import { FavoritoUncheckedCreateWithoutEstadoInputObjectSchema as FavoritoUncheckedCreateWithoutEstadoInputObjectSchema } from "./FavoritoUncheckedCreateWithoutEstadoInput.schema.ts";
import { FavoritoUpdateManyWithWhereWithoutEstadoInputObjectSchema as FavoritoUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./FavoritoUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { FavoritoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as FavoritoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./FavoritoUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { FavoritoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as FavoritoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./FavoritoUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => FavoritoCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => FavoritoCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => FavoritoUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => FavoritoUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => FavoritoCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => FavoritoCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => FavoritoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => FavoritoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => FavoritoCreateManyEstadoInputEnvelopeObjectSchema)
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
						() => FavoritoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => FavoritoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => FavoritoUpdateManyWithWhereWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => FavoritoUpdateManyWithWhereWithoutEstadoInputObjectSchema,
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
export const FavoritoUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.FavoritoUncheckedUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUncheckedUpdateManyWithoutEstadoNestedInput>;
export const FavoritoUncheckedUpdateManyWithoutEstadoNestedInputObjectZodSchema =
	makeSchema();
