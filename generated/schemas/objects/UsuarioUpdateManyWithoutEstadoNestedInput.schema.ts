import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { UsuarioCreateManyEstadoInputEnvelopeObjectSchema as UsuarioCreateManyEstadoInputEnvelopeObjectSchema } from "./UsuarioCreateManyEstadoInputEnvelope.schema.ts";
import { UsuarioCreateOrConnectWithoutEstadoInputObjectSchema as UsuarioCreateOrConnectWithoutEstadoInputObjectSchema } from "./UsuarioCreateOrConnectWithoutEstadoInput.schema.ts";
import { UsuarioCreateWithoutEstadoInputObjectSchema as UsuarioCreateWithoutEstadoInputObjectSchema } from "./UsuarioCreateWithoutEstadoInput.schema.ts";
import { UsuarioScalarWhereInputObjectSchema as UsuarioScalarWhereInputObjectSchema } from "./UsuarioScalarWhereInput.schema.ts";
import { UsuarioUncheckedCreateWithoutEstadoInputObjectSchema as UsuarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./UsuarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { UsuarioUpdateManyWithWhereWithoutEstadoInputObjectSchema as UsuarioUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./UsuarioUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { UsuarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as UsuarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./UsuarioUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { UsuarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as UsuarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./UsuarioUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => UsuarioCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => UsuarioCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => UsuarioUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => UsuarioUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => UsuarioCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => UsuarioCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(
						() => UsuarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => UsuarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => UsuarioCreateManyEstadoInputEnvelopeObjectSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
					z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
					z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
					z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
					z.lazy(() => UsuarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => UsuarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => UsuarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(
						() => UsuarioUpdateManyWithWhereWithoutEstadoInputObjectSchema,
					),
					z
						.lazy(
							() => UsuarioUpdateManyWithWhereWithoutEstadoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => UsuarioScalarWhereInputObjectSchema),
					z.lazy(() => UsuarioScalarWhereInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const UsuarioUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateManyWithoutEstadoNestedInput>;
export const UsuarioUpdateManyWithoutEstadoNestedInputObjectZodSchema =
	makeSchema();
