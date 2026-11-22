import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotificacionCreateInputObjectSchema as NotificacionCreateInputObjectSchema } from "./objects/NotificacionCreateInput.schema.ts";
import { NotificacionIncludeObjectSchema as NotificacionIncludeObjectSchema } from "./objects/NotificacionInclude.schema.ts";
import { NotificacionSelectObjectSchema as NotificacionSelectObjectSchema } from "./objects/NotificacionSelect.schema.ts";
import { NotificacionUncheckedCreateInputObjectSchema as NotificacionUncheckedCreateInputObjectSchema } from "./objects/NotificacionUncheckedCreateInput.schema.ts";

export const NotificacionCreateOneSchema: z.ZodType<Prisma.NotificacionCreateArgs> =
	z
		.object({
			select: NotificacionSelectObjectSchema.optional(),
			include: NotificacionIncludeObjectSchema.optional(),
			data: z.union([
				NotificacionCreateInputObjectSchema,
				NotificacionUncheckedCreateInputObjectSchema,
			]),
		})
		.strict() as unknown as z.ZodType<Prisma.NotificacionCreateArgs>;

export const NotificacionCreateOneZodSchema = z
	.object({
		select: NotificacionSelectObjectSchema.optional(),
		include: NotificacionIncludeObjectSchema.optional(),
		data: z.union([
			NotificacionCreateInputObjectSchema,
			NotificacionUncheckedCreateInputObjectSchema,
		]),
	})
	.strict();
