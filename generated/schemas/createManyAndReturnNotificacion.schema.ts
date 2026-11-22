import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotificacionCreateManyInputObjectSchema as NotificacionCreateManyInputObjectSchema } from "./objects/NotificacionCreateManyInput.schema.ts";
import { NotificacionSelectObjectSchema as NotificacionSelectObjectSchema } from "./objects/NotificacionSelect.schema.ts";

export const NotificacionCreateManyAndReturnSchema: z.ZodType<Prisma.NotificacionCreateManyAndReturnArgs> =
	z
		.object({
			select: NotificacionSelectObjectSchema.optional(),
			data: z.union([
				NotificacionCreateManyInputObjectSchema,
				z.array(NotificacionCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.NotificacionCreateManyAndReturnArgs>;

export const NotificacionCreateManyAndReturnZodSchema = z
	.object({
		select: NotificacionSelectObjectSchema.optional(),
		data: z.union([
			NotificacionCreateManyInputObjectSchema,
			z.array(NotificacionCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
