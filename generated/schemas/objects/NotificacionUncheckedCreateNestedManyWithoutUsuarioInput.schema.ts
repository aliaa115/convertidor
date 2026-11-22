import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotificacionCreateManyUsuarioInputEnvelopeObjectSchema as NotificacionCreateManyUsuarioInputEnvelopeObjectSchema } from "./NotificacionCreateManyUsuarioInputEnvelope.schema.ts";
import { NotificacionCreateOrConnectWithoutUsuarioInputObjectSchema as NotificacionCreateOrConnectWithoutUsuarioInputObjectSchema } from "./NotificacionCreateOrConnectWithoutUsuarioInput.schema.ts";
import { NotificacionCreateWithoutUsuarioInputObjectSchema as NotificacionCreateWithoutUsuarioInputObjectSchema } from "./NotificacionCreateWithoutUsuarioInput.schema.ts";
import { NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema as NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema } from "./NotificacionUncheckedCreateWithoutUsuarioInput.schema.ts";
import { NotificacionWhereUniqueInputObjectSchema as NotificacionWhereUniqueInputObjectSchema } from "./NotificacionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => NotificacionCreateWithoutUsuarioInputObjectSchema),
					z
						.lazy(() => NotificacionCreateWithoutUsuarioInputObjectSchema)
						.array(),
					z.lazy(
						() => NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema,
					),
					z
						.lazy(
							() => NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(
						() => NotificacionCreateOrConnectWithoutUsuarioInputObjectSchema,
					),
					z
						.lazy(
							() => NotificacionCreateOrConnectWithoutUsuarioInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => NotificacionCreateManyUsuarioInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => NotificacionWhereUniqueInputObjectSchema),
					z.lazy(() => NotificacionWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const NotificacionUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.NotificacionUncheckedCreateNestedManyWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionUncheckedCreateNestedManyWithoutUsuarioInput>;
export const NotificacionUncheckedCreateNestedManyWithoutUsuarioInputObjectZodSchema =
	makeSchema();
