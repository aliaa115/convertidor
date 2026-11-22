import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotificacionCreateWithoutUsuarioInputObjectSchema as NotificacionCreateWithoutUsuarioInputObjectSchema } from "./NotificacionCreateWithoutUsuarioInput.schema.ts";
import { NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema as NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema } from "./NotificacionUncheckedCreateWithoutUsuarioInput.schema.ts";
import { NotificacionWhereUniqueInputObjectSchema as NotificacionWhereUniqueInputObjectSchema } from "./NotificacionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotificacionWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => NotificacionCreateWithoutUsuarioInputObjectSchema),
				z.lazy(
					() => NotificacionUncheckedCreateWithoutUsuarioInputObjectSchema,
				),
			]),
		})
		.strict();
export const NotificacionCreateOrConnectWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.NotificacionCreateOrConnectWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionCreateOrConnectWithoutUsuarioInput>;
export const NotificacionCreateOrConnectWithoutUsuarioInputObjectZodSchema =
	makeSchema();
