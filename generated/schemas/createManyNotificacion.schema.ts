import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { NotificacionCreateManyInputObjectSchema as NotificacionCreateManyInputObjectSchema } from "./objects/NotificacionCreateManyInput.schema.ts";

export const NotificacionCreateManySchema: z.ZodType<Prisma.NotificacionCreateManyArgs> = z
	.object({ data: z.union([NotificacionCreateManyInputObjectSchema, z.array(NotificacionCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.NotificacionCreateManyArgs>;

export const NotificacionCreateManyZodSchema = z
	.object({ data: z.union([NotificacionCreateManyInputObjectSchema, z.array(NotificacionCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
