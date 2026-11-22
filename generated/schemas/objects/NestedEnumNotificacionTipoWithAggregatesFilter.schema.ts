import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotificacionTipoSchema } from "../enums/NotificacionTipo.schema.ts";
import { NestedEnumNotificacionTipoFilterObjectSchema as NestedEnumNotificacionTipoFilterObjectSchema } from "./NestedEnumNotificacionTipoFilter.schema.ts";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema.ts";

const nestedenumnotificaciontipowithaggregatesfilterSchema = z
	.object({
		equals: NotificacionTipoSchema.optional(),
		in: NotificacionTipoSchema.array().optional(),
		notIn: NotificacionTipoSchema.array().optional(),
		not: z.union([NotificacionTipoSchema, z.lazy(() => NestedEnumNotificacionTipoWithAggregatesFilterObjectSchema)]).optional(),
		_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
		_min: z.lazy(() => NestedEnumNotificacionTipoFilterObjectSchema).optional(),
		_max: z.lazy(() => NestedEnumNotificacionTipoFilterObjectSchema).optional(),
	})
	.strict();
export const NestedEnumNotificacionTipoWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumNotificacionTipoWithAggregatesFilter> =
	nestedenumnotificaciontipowithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumNotificacionTipoWithAggregatesFilter>;
export const NestedEnumNotificacionTipoWithAggregatesFilterObjectZodSchema = nestedenumnotificaciontipowithaggregatesfilterSchema;
