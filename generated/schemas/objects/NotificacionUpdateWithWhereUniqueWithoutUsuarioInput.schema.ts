import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotificacionUncheckedUpdateWithoutUsuarioInputObjectSchema as NotificacionUncheckedUpdateWithoutUsuarioInputObjectSchema } from "./NotificacionUncheckedUpdateWithoutUsuarioInput.schema.ts";
import { NotificacionUpdateWithoutUsuarioInputObjectSchema as NotificacionUpdateWithoutUsuarioInputObjectSchema } from "./NotificacionUpdateWithoutUsuarioInput.schema.ts";
import { NotificacionWhereUniqueInputObjectSchema as NotificacionWhereUniqueInputObjectSchema } from "./NotificacionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotificacionWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => NotificacionUpdateWithoutUsuarioInputObjectSchema),
				z.lazy(
					() => NotificacionUncheckedUpdateWithoutUsuarioInputObjectSchema,
				),
			]),
		})
		.strict();
export const NotificacionUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.NotificacionUpdateWithWhereUniqueWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionUpdateWithWhereUniqueWithoutUsuarioInput>;
export const NotificacionUpdateWithWhereUniqueWithoutUsuarioInputObjectZodSchema =
	makeSchema();
