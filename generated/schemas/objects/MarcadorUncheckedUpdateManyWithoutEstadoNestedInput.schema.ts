import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { MarcadorCreateManyEstadoInputEnvelopeObjectSchema as MarcadorCreateManyEstadoInputEnvelopeObjectSchema } from "./MarcadorCreateManyEstadoInputEnvelope.schema.ts";
import { MarcadorCreateOrConnectWithoutEstadoInputObjectSchema as MarcadorCreateOrConnectWithoutEstadoInputObjectSchema } from "./MarcadorCreateOrConnectWithoutEstadoInput.schema.ts";
import { MarcadorCreateWithoutEstadoInputObjectSchema as MarcadorCreateWithoutEstadoInputObjectSchema } from "./MarcadorCreateWithoutEstadoInput.schema.ts";
import { MarcadorScalarWhereInputObjectSchema as MarcadorScalarWhereInputObjectSchema } from "./MarcadorScalarWhereInput.schema.ts";
import { MarcadorUncheckedCreateWithoutEstadoInputObjectSchema as MarcadorUncheckedCreateWithoutEstadoInputObjectSchema } from "./MarcadorUncheckedCreateWithoutEstadoInput.schema.ts";
import { MarcadorUpdateManyWithWhereWithoutEstadoInputObjectSchema as MarcadorUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./MarcadorUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { MarcadorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as MarcadorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./MarcadorUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { MarcadorUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as MarcadorUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./MarcadorUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./MarcadorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => MarcadorCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => MarcadorCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => MarcadorUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => MarcadorUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => MarcadorCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => MarcadorCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => MarcadorUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => MarcadorUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => MarcadorCreateManyEstadoInputEnvelopeObjectSchema)
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
						() => MarcadorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => MarcadorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => MarcadorUpdateManyWithWhereWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => MarcadorUpdateManyWithWhereWithoutEstadoInputObjectSchema,
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
export const MarcadorUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.MarcadorUncheckedUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUncheckedUpdateManyWithoutEstadoNestedInput>;
export const MarcadorUncheckedUpdateManyWithoutEstadoNestedInputObjectZodSchema =
	makeSchema();
