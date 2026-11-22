import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotificacionWhereInputObjectSchema as NotificacionWhereInputObjectSchema } from "./objects/NotificacionWhereInput.schema.ts";

export const NotificacionDeleteManySchema: z.ZodType<Prisma.NotificacionDeleteManyArgs> =
	z
		.object({ where: NotificacionWhereInputObjectSchema.optional() })
		.strict() as unknown as z.ZodType<Prisma.NotificacionDeleteManyArgs>;

export const NotificacionDeleteManyZodSchema = z
	.object({ where: NotificacionWhereInputObjectSchema.optional() })
	.strict();
