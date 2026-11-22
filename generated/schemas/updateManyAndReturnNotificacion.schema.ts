import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { NotificacionSelectObjectSchema as NotificacionSelectObjectSchema } from "./objects/NotificacionSelect.schema.ts";
import { NotificacionUpdateManyMutationInputObjectSchema as NotificacionUpdateManyMutationInputObjectSchema } from "./objects/NotificacionUpdateManyMutationInput.schema.ts";
import { NotificacionWhereInputObjectSchema as NotificacionWhereInputObjectSchema } from "./objects/NotificacionWhereInput.schema.ts";

export const NotificacionUpdateManyAndReturnSchema: z.ZodType<Prisma.NotificacionUpdateManyAndReturnArgs> = z
	.object({ select: NotificacionSelectObjectSchema.optional(), data: NotificacionUpdateManyMutationInputObjectSchema, where: NotificacionWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.NotificacionUpdateManyAndReturnArgs>;

export const NotificacionUpdateManyAndReturnZodSchema = z
	.object({ select: NotificacionSelectObjectSchema.optional(), data: NotificacionUpdateManyMutationInputObjectSchema, where: NotificacionWhereInputObjectSchema.optional() })
	.strict();
