import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotificacionTipoSchema } from "../enums/NotificacionTipo.schema.ts";
import { NestedEnumNotificacionTipoFilterObjectSchema as NestedEnumNotificacionTipoFilterObjectSchema } from "./NestedEnumNotificacionTipoFilter.schema.ts";

const makeSchema = () =>
	z
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
export const EnumNotificacionTipoFilterObjectSchema: z.ZodType<Prisma.EnumNotificacionTipoFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.EnumNotificacionTipoFilter>;
export const EnumNotificacionTipoFilterObjectZodSchema = makeSchema();
