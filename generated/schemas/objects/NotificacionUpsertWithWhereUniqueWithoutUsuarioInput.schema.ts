import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotificacionCreateWithoutUsuarioInputObjectSchema as NotificacionCreateWithoutUsuarioInputObjectSchema } from "./NotificacionCreateWithoutUsuarioInput.schema.ts";
import { NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema as NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema } from "./NotificacionUncheckedCreateWithoutUsuarioInput.schema.ts";
import { NotificacionUncheckedUpdateWithoutUsuarioInputObjectSchema as NotificacionUncheckedUpdateWithoutUsuarioInputObjectSchema } from "./NotificacionUncheckedUpdateWithoutUsuarioInput.schema.ts";
import { NotificacionUpdateWithoutUsuarioInputObjectSchema as NotificacionUpdateWithoutUsuarioInputObjectSchema } from "./NotificacionUpdateWithoutUsuarioInput.schema.ts";
import { NotificacionWhereUniqueInputObjectSchema as NotificacionWhereUniqueInputObjectSchema } from "./NotificacionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotificacionWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => NotificacionUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => NotificacionUncheckedUpdateWithoutUsuarioInputObjectSchema)]),
			create: z.union([z.lazy(() => NotificacionCreateWithoutUsuarioInputObjectSchema), z.lazy(() => NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema)]),
		})
		.strict();
export const NotificacionUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.NotificacionUpsertWithWhereUniqueWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionUpsertWithWhereUniqueWithoutUsuarioInput>;
export const NotificacionUpsertWithWhereUniqueWithoutUsuarioInputObjectZodSchema = makeSchema();
