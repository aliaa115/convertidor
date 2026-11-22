import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { NotificacionIncludeObjectSchema as NotificacionIncludeObjectSchema } from "./objects/NotificacionInclude.schema.ts";
import { NotificacionSelectObjectSchema as NotificacionSelectObjectSchema } from "./objects/NotificacionSelect.schema.ts";
import { NotificacionWhereUniqueInputObjectSchema as NotificacionWhereUniqueInputObjectSchema } from "./objects/NotificacionWhereUniqueInput.schema.ts";

export const NotificacionFindUniqueOrThrowSchema: z.ZodType<Prisma.NotificacionFindUniqueOrThrowArgs> = z
	.object({ select: NotificacionSelectObjectSchema.optional(), include: NotificacionIncludeObjectSchema.optional(), where: NotificacionWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.NotificacionFindUniqueOrThrowArgs>;

export const NotificacionFindUniqueOrThrowZodSchema = z
	.object({ select: NotificacionSelectObjectSchema.optional(), include: NotificacionIncludeObjectSchema.optional(), where: NotificacionWhereUniqueInputObjectSchema })
	.strict();
