import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotificacionTipoSchema } from "../enums/NotificacionTipo.schema.ts";
import { NestedEnumNotificacionTipoFilterObjectSchema as NestedEnumNotificacionTipoFilterObjectSchema } from "./NestedEnumNotificacionTipoFilter.schema.ts";
import { NestedEnumNotificacionTipoWithAggregatesFilterObjectSchema as NestedEnumNotificacionTipoWithAggregatesFilterObjectSchema } from "./NestedEnumNotificacionTipoWithAggregatesFilter.schema.ts";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema.ts";

const makeSchema = () =>
	z
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
export const EnumNotificacionTipoWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumNotificacionTipoWithAggregatesFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.EnumNotificacionTipoWithAggregatesFilter>;
export const EnumNotificacionTipoWithAggregatesFilterObjectZodSchema = makeSchema();
