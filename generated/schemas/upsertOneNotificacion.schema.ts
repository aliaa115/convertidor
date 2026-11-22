import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotificacionCreateInputObjectSchema as NotificacionCreateInputObjectSchema } from "./objects/NotificacionCreateInput.schema.ts";
import { NotificacionIncludeObjectSchema as NotificacionIncludeObjectSchema } from "./objects/NotificacionInclude.schema.ts";
import { NotificacionSelectObjectSchema as NotificacionSelectObjectSchema } from "./objects/NotificacionSelect.schema.ts";
import { NotificacionUncheckedCreateInputObjectSchema as NotificacionUncheckedCreateInputObjectSchema } from "./objects/NotificacionUncheckedCreateInput.schema.ts";
import { NotificacionUncheckedUpdateInputObjectSchema as NotificacionUncheckedUpdateInputObjectSchema } from "./objects/NotificacionUncheckedUpdateInput.schema.ts";
import { NotificacionUpdateInputObjectSchema as NotificacionUpdateInputObjectSchema } from "./objects/NotificacionUpdateInput.schema.ts";
import { NotificacionWhereUniqueInputObjectSchema as NotificacionWhereUniqueInputObjectSchema } from "./objects/NotificacionWhereUniqueInput.schema.ts";

export const NotificacionUpsertOneSchema: z.ZodType<Prisma.NotificacionUpsertArgs> =
	z
		.object({
			select: NotificacionSelectObjectSchema.optional(),
			include: NotificacionIncludeObjectSchema.optional(),
			where: NotificacionWhereUniqueInputObjectSchema,
			create: z.union([
				NotificacionCreateInputObjectSchema,
				NotificacionUncheckedCreateInputObjectSchema,
			]),
			update: z.union([
				NotificacionUpdateInputObjectSchema,
				NotificacionUncheckedUpdateInputObjectSchema,
			]),
		})
		.strict() as unknown as z.ZodType<Prisma.NotificacionUpsertArgs>;

export const NotificacionUpsertOneZodSchema = z
	.object({
		select: NotificacionSelectObjectSchema.optional(),
		include: NotificacionIncludeObjectSchema.optional(),
		where: NotificacionWhereUniqueInputObjectSchema,
		create: z.union([
			NotificacionCreateInputObjectSchema,
			NotificacionUncheckedCreateInputObjectSchema,
		]),
		update: z.union([
			NotificacionUpdateInputObjectSchema,
			NotificacionUncheckedUpdateInputObjectSchema,
		]),
	})
	.strict();
