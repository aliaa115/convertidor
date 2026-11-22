import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotificacionTipoSchema } from "../enums/NotificacionTipo.schema.ts";

const nestedenumnotificaciontipofilterSchema = z
	.object({
		equals: NotificacionTipoSchema.optional(),
		in: NotificacionTipoSchema.array().optional(),
		notIn: NotificacionTipoSchema.array().optional(),
		not: z
			.union([
				NotificacionTipoSchema,
				z.lazy(() => NestedEnumNotificacionTipoFilterObjectSchema),
			])
			.optional(),
	})
	.strict();
export const NestedEnumNotificacionTipoFilterObjectSchema: z.ZodType<Prisma.NestedEnumNotificacionTipoFilter> =
	nestedenumnotificaciontipofilterSchema as unknown as z.ZodType<Prisma.NestedEnumNotificacionTipoFilter>;
export const NestedEnumNotificacionTipoFilterObjectZodSchema =
	nestedenumnotificaciontipofilterSchema;
