import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotificacionCreateManyUsuarioInputEnvelopeObjectSchema as NotificacionCreateManyUsuarioInputEnvelopeObjectSchema } from "./NotificacionCreateManyUsuarioInputEnvelope.schema.ts";
import { NotificacionCreateOrConnectWithoutUsuarioInputObjectSchema as NotificacionCreateOrConnectWithoutUsuarioInputObjectSchema } from "./NotificacionCreateOrConnectWithoutUsuarioInput.schema.ts";
import { NotificacionCreateWithoutUsuarioInputObjectSchema as NotificacionCreateWithoutUsuarioInputObjectSchema } from "./NotificacionCreateWithoutUsuarioInput.schema.ts";
import { NotificacionScalarWhereInputObjectSchema as NotificacionScalarWhereInputObjectSchema } from "./NotificacionScalarWhereInput.schema.ts";
import { NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema as NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema } from "./NotificacionUncheckedCreateWithoutUsuarioInput.schema.ts";
import { NotificacionUpdateManyWithWhereWithoutUsuarioInputObjectSchema as NotificacionUpdateManyWithWhereWithoutUsuarioInputObjectSchema } from "./NotificacionUpdateManyWithWhereWithoutUsuarioInput.schema.ts";
import { NotificacionUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema as NotificacionUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema } from "./NotificacionUpdateWithWhereUniqueWithoutUsuarioInput.schema.ts";
import { NotificacionUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema as NotificacionUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema } from "./NotificacionUpsertWithWhereUniqueWithoutUsuarioInput.schema.ts";
import { NotificacionWhereUniqueInputObjectSchema as NotificacionWhereUniqueInputObjectSchema } from "./NotificacionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => NotificacionCreateWithoutUsuarioInputObjectSchema),
					z.lazy(() => NotificacionCreateWithoutUsuarioInputObjectSchema).array(),
					z.lazy(() => NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema),
					z.lazy(() => NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => NotificacionCreateOrConnectWithoutUsuarioInputObjectSchema), z.lazy(() => NotificacionCreateOrConnectWithoutUsuarioInputObjectSchema).array()]).optional(),
			upsert: z
				.union([z.lazy(() => NotificacionUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema), z.lazy(() => NotificacionUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema).array()])
				.optional(),
			createMany: z.lazy(() => NotificacionCreateManyUsuarioInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => NotificacionWhereUniqueInputObjectSchema), z.lazy(() => NotificacionWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => NotificacionWhereUniqueInputObjectSchema), z.lazy(() => NotificacionWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => NotificacionWhereUniqueInputObjectSchema), z.lazy(() => NotificacionWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => NotificacionWhereUniqueInputObjectSchema), z.lazy(() => NotificacionWhereUniqueInputObjectSchema).array()]).optional(),
			update: z
				.union([z.lazy(() => NotificacionUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema), z.lazy(() => NotificacionUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema).array()])
				.optional(),
			updateMany: z
				.union([z.lazy(() => NotificacionUpdateManyWithWhereWithoutUsuarioInputObjectSchema), z.lazy(() => NotificacionUpdateManyWithWhereWithoutUsuarioInputObjectSchema).array()])
				.optional(),
			deleteMany: z.union([z.lazy(() => NotificacionScalarWhereInputObjectSchema), z.lazy(() => NotificacionScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const NotificacionUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema: z.ZodType<Prisma.NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput>;
export const NotificacionUncheckedUpdateManyWithoutUsuarioNestedInputObjectZodSchema = makeSchema();
