import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SeguirUsuarioCreateManyEstadoInputEnvelopeObjectSchema as SeguirUsuarioCreateManyEstadoInputEnvelopeObjectSchema } from "./SeguirUsuarioCreateManyEstadoInputEnvelope.schema.ts";
import { SeguirUsuarioCreateOrConnectWithoutEstadoInputObjectSchema as SeguirUsuarioCreateOrConnectWithoutEstadoInputObjectSchema } from "./SeguirUsuarioCreateOrConnectWithoutEstadoInput.schema.ts";
import { SeguirUsuarioCreateWithoutEstadoInputObjectSchema as SeguirUsuarioCreateWithoutEstadoInputObjectSchema } from "./SeguirUsuarioCreateWithoutEstadoInput.schema.ts";
import { SeguirUsuarioScalarWhereInputObjectSchema as SeguirUsuarioScalarWhereInputObjectSchema } from "./SeguirUsuarioScalarWhereInput.schema.ts";
import { SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema as SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./SeguirUsuarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { SeguirUsuarioUpdateManyWithWhereWithoutEstadoInputObjectSchema as SeguirUsuarioUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./SeguirUsuarioUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { SeguirUsuarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as SeguirUsuarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./SeguirUsuarioUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { SeguirUsuarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as SeguirUsuarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./SeguirUsuarioUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => SeguirUsuarioCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => SeguirUsuarioCreateWithoutEstadoInputObjectSchema)
						.array(),
					z.lazy(
						() => SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(
						() => SeguirUsuarioCreateOrConnectWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => SeguirUsuarioCreateOrConnectWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() =>
							SeguirUsuarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() =>
								SeguirUsuarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => SeguirUsuarioCreateManyEstadoInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
					z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
					z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
					z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
					z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() =>
							SeguirUsuarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() =>
								SeguirUsuarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() =>
							SeguirUsuarioUpdateManyWithWhereWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() =>
								SeguirUsuarioUpdateManyWithWhereWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => SeguirUsuarioScalarWhereInputObjectSchema),
					z.lazy(() => SeguirUsuarioScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const SeguirUsuarioUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUncheckedUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUncheckedUpdateManyWithoutEstadoNestedInput>;
export const SeguirUsuarioUncheckedUpdateManyWithoutEstadoNestedInputObjectZodSchema =
	makeSchema();
