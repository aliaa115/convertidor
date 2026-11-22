import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotaAutorCreateManyEscritorInputEnvelopeObjectSchema as NotaAutorCreateManyEscritorInputEnvelopeObjectSchema } from "./NotaAutorCreateManyEscritorInputEnvelope.schema.ts";
import { NotaAutorCreateOrConnectWithoutEscritorInputObjectSchema as NotaAutorCreateOrConnectWithoutEscritorInputObjectSchema } from "./NotaAutorCreateOrConnectWithoutEscritorInput.schema.ts";
import { NotaAutorCreateWithoutEscritorInputObjectSchema as NotaAutorCreateWithoutEscritorInputObjectSchema } from "./NotaAutorCreateWithoutEscritorInput.schema.ts";
import { NotaAutorScalarWhereInputObjectSchema as NotaAutorScalarWhereInputObjectSchema } from "./NotaAutorScalarWhereInput.schema.ts";
import { NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema as NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema } from "./NotaAutorUncheckedCreateWithoutEscritorInput.schema.ts";
import { NotaAutorUpdateManyWithWhereWithoutEscritorInputObjectSchema as NotaAutorUpdateManyWithWhereWithoutEscritorInputObjectSchema } from "./NotaAutorUpdateManyWithWhereWithoutEscritorInput.schema.ts";
import { NotaAutorUpdateWithWhereUniqueWithoutEscritorInputObjectSchema as NotaAutorUpdateWithWhereUniqueWithoutEscritorInputObjectSchema } from "./NotaAutorUpdateWithWhereUniqueWithoutEscritorInput.schema.ts";
import { NotaAutorUpsertWithWhereUniqueWithoutEscritorInputObjectSchema as NotaAutorUpsertWithWhereUniqueWithoutEscritorInputObjectSchema } from "./NotaAutorUpsertWithWhereUniqueWithoutEscritorInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => NotaAutorCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => NotaAutorCreateWithoutEscritorInputObjectSchema).array(),
					z.lazy(
						() => NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() => NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(
						() => NotaAutorCreateOrConnectWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() => NotaAutorCreateOrConnectWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() =>
							NotaAutorUpsertWithWhereUniqueWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() =>
								NotaAutorUpsertWithWhereUniqueWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => NotaAutorCreateManyEscritorInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
					z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
					z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
					z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
					z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() =>
							NotaAutorUpdateWithWhereUniqueWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() =>
								NotaAutorUpdateWithWhereUniqueWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => NotaAutorUpdateManyWithWhereWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() =>
								NotaAutorUpdateManyWithWhereWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => NotaAutorScalarWhereInputObjectSchema),
					z.lazy(() => NotaAutorScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const NotaAutorUpdateManyWithoutEscritorNestedInputObjectSchema: z.ZodType<Prisma.NotaAutorUpdateManyWithoutEscritorNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUpdateManyWithoutEscritorNestedInput>;
export const NotaAutorUpdateManyWithoutEscritorNestedInputObjectZodSchema =
	makeSchema();
