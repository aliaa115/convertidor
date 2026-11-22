import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { GlosarioCreateManyEscritorInputEnvelopeObjectSchema as GlosarioCreateManyEscritorInputEnvelopeObjectSchema } from "./GlosarioCreateManyEscritorInputEnvelope.schema.ts";
import { GlosarioCreateOrConnectWithoutEscritorInputObjectSchema as GlosarioCreateOrConnectWithoutEscritorInputObjectSchema } from "./GlosarioCreateOrConnectWithoutEscritorInput.schema.ts";
import { GlosarioCreateWithoutEscritorInputObjectSchema as GlosarioCreateWithoutEscritorInputObjectSchema } from "./GlosarioCreateWithoutEscritorInput.schema.ts";
import { GlosarioScalarWhereInputObjectSchema as GlosarioScalarWhereInputObjectSchema } from "./GlosarioScalarWhereInput.schema.ts";
import { GlosarioUncheckedCreateWithoutEscritorInputObjectSchema as GlosarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./GlosarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { GlosarioUpdateManyWithWhereWithoutEscritorInputObjectSchema as GlosarioUpdateManyWithWhereWithoutEscritorInputObjectSchema } from "./GlosarioUpdateManyWithWhereWithoutEscritorInput.schema.ts";
import { GlosarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema as GlosarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema } from "./GlosarioUpdateWithWhereUniqueWithoutEscritorInput.schema.ts";
import { GlosarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema as GlosarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema } from "./GlosarioUpsertWithWhereUniqueWithoutEscritorInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./GlosarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => GlosarioCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => GlosarioCreateWithoutEscritorInputObjectSchema).array(),
					z.lazy(() => GlosarioUncheckedCreateWithoutEscritorInputObjectSchema),
					z
						.lazy(() => GlosarioUncheckedCreateWithoutEscritorInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => GlosarioCreateOrConnectWithoutEscritorInputObjectSchema),
					z
						.lazy(() => GlosarioCreateOrConnectWithoutEscritorInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => GlosarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() =>
								GlosarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => GlosarioCreateManyEscritorInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => GlosarioWhereUniqueInputObjectSchema),
					z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => GlosarioWhereUniqueInputObjectSchema),
					z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => GlosarioWhereUniqueInputObjectSchema),
					z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => GlosarioWhereUniqueInputObjectSchema),
					z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => GlosarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() =>
								GlosarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => GlosarioUpdateManyWithWhereWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() => GlosarioUpdateManyWithWhereWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => GlosarioScalarWhereInputObjectSchema),
					z.lazy(() => GlosarioScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const GlosarioUpdateManyWithoutEscritorNestedInputObjectSchema: z.ZodType<Prisma.GlosarioUpdateManyWithoutEscritorNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpdateManyWithoutEscritorNestedInput>;
export const GlosarioUpdateManyWithoutEscritorNestedInputObjectZodSchema =
	makeSchema();
