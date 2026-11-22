import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotificacionIncludeObjectSchema as NotificacionIncludeObjectSchema } from "./objects/NotificacionInclude.schema.ts";
import { NotificacionSelectObjectSchema as NotificacionSelectObjectSchema } from "./objects/NotificacionSelect.schema.ts";
import { NotificacionUncheckedUpdateInputObjectSchema as NotificacionUncheckedUpdateInputObjectSchema } from "./objects/NotificacionUncheckedUpdateInput.schema.ts";
import { NotificacionUpdateInputObjectSchema as NotificacionUpdateInputObjectSchema } from "./objects/NotificacionUpdateInput.schema.ts";
import { NotificacionWhereUniqueInputObjectSchema as NotificacionWhereUniqueInputObjectSchema } from "./objects/NotificacionWhereUniqueInput.schema.ts";

export const NotificacionUpdateOneSchema: z.ZodType<Prisma.NotificacionUpdateArgs> =
	z
		.object({
			select: NotificacionSelectObjectSchema.optional(),
			include: NotificacionIncludeObjectSchema.optional(),
			data: z.union([
				NotificacionUpdateInputObjectSchema,
				NotificacionUncheckedUpdateInputObjectSchema,
			]),
			where: NotificacionWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.NotificacionUpdateArgs>;

export const NotificacionUpdateOneZodSchema = z
	.object({
		select: NotificacionSelectObjectSchema.optional(),
		include: NotificacionIncludeObjectSchema.optional(),
		data: z.union([
			NotificacionUpdateInputObjectSchema,
			NotificacionUncheckedUpdateInputObjectSchema,
		]),
		where: NotificacionWhereUniqueInputObjectSchema,
	})
	.strict();
