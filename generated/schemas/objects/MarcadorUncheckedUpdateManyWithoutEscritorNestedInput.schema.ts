import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { MarcadorCreateManyEscritorInputEnvelopeObjectSchema as MarcadorCreateManyEscritorInputEnvelopeObjectSchema } from "./MarcadorCreateManyEscritorInputEnvelope.schema.ts";
import { MarcadorCreateOrConnectWithoutEscritorInputObjectSchema as MarcadorCreateOrConnectWithoutEscritorInputObjectSchema } from "./MarcadorCreateOrConnectWithoutEscritorInput.schema.ts";
import { MarcadorCreateWithoutEscritorInputObjectSchema as MarcadorCreateWithoutEscritorInputObjectSchema } from "./MarcadorCreateWithoutEscritorInput.schema.ts";
import { MarcadorScalarWhereInputObjectSchema as MarcadorScalarWhereInputObjectSchema } from "./MarcadorScalarWhereInput.schema.ts";
import { MarcadorUncheckedCreateWithoutEscritorInputObjectSchema as MarcadorUncheckedCreateWithoutEscritorInputObjectSchema } from "./MarcadorUncheckedCreateWithoutEscritorInput.schema.ts";
import { MarcadorUpdateManyWithWhereWithoutEscritorInputObjectSchema as MarcadorUpdateManyWithWhereWithoutEscritorInputObjectSchema } from "./MarcadorUpdateManyWithWhereWithoutEscritorInput.schema.ts";
import { MarcadorUpdateWithWhereUniqueWithoutEscritorInputObjectSchema as MarcadorUpdateWithWhereUniqueWithoutEscritorInputObjectSchema } from "./MarcadorUpdateWithWhereUniqueWithoutEscritorInput.schema.ts";
import { MarcadorUpsertWithWhereUniqueWithoutEscritorInputObjectSchema as MarcadorUpsertWithWhereUniqueWithoutEscritorInputObjectSchema } from "./MarcadorUpsertWithWhereUniqueWithoutEscritorInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./MarcadorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => MarcadorCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => MarcadorCreateWithoutEscritorInputObjectSchema).array(),
					z.lazy(() => MarcadorUncheckedCreateWithoutEscritorInputObjectSchema),
					z
						.lazy(() => MarcadorUncheckedCreateWithoutEscritorInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => MarcadorCreateOrConnectWithoutEscritorInputObjectSchema),
					z
						.lazy(() => MarcadorCreateOrConnectWithoutEscritorInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => MarcadorUpsertWithWhereUniqueWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() =>
								MarcadorUpsertWithWhereUniqueWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => MarcadorCreateManyEscritorInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => MarcadorWhereUniqueInputObjectSchema),
					z.lazy(() => MarcadorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => MarcadorWhereUniqueInputObjectSchema),
					z.lazy(() => MarcadorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => MarcadorWhereUniqueInputObjectSchema),
					z.lazy(() => MarcadorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => MarcadorWhereUniqueInputObjectSchema),
					z.lazy(() => MarcadorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => MarcadorUpdateWithWhereUniqueWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() =>
								MarcadorUpdateWithWhereUniqueWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => MarcadorUpdateManyWithWhereWithoutEscritorInputObjectSchema,
					),
					z
						.lazy(
							() => MarcadorUpdateManyWithWhereWithoutEscritorInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => MarcadorScalarWhereInputObjectSchema),
					z.lazy(() => MarcadorScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const MarcadorUncheckedUpdateManyWithoutEscritorNestedInputObjectSchema: z.ZodType<Prisma.MarcadorUncheckedUpdateManyWithoutEscritorNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUncheckedUpdateManyWithoutEscritorNestedInput>;
export const MarcadorUncheckedUpdateManyWithoutEscritorNestedInputObjectZodSchema =
	makeSchema();
