import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotificacionUpdateManyMutationInputObjectSchema as NotificacionUpdateManyMutationInputObjectSchema } from "./objects/NotificacionUpdateManyMutationInput.schema.ts";
import { NotificacionWhereInputObjectSchema as NotificacionWhereInputObjectSchema } from "./objects/NotificacionWhereInput.schema.ts";

export const NotificacionUpdateManySchema: z.ZodType<Prisma.NotificacionUpdateManyArgs> =
	z
		.object({
			data: NotificacionUpdateManyMutationInputObjectSchema,
			where: NotificacionWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.NotificacionUpdateManyArgs>;

export const NotificacionUpdateManyZodSchema = z
	.object({
		data: NotificacionUpdateManyMutationInputObjectSchema,
		where: NotificacionWhereInputObjectSchema.optional(),
	})
	.strict();
