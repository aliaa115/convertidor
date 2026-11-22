import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EntidadTipoSchema } from "../enums/EntidadTipo.schema.ts";
import { NestedEnumEntidadTipoFilterObjectSchema as NestedEnumEntidadTipoFilterObjectSchema } from "./NestedEnumEntidadTipoFilter.schema.ts";
import { NestedEnumEntidadTipoWithAggregatesFilterObjectSchema as NestedEnumEntidadTipoWithAggregatesFilterObjectSchema } from "./NestedEnumEntidadTipoWithAggregatesFilter.schema.ts";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema.ts";

const makeSchema = () =>
	z
		.object({
			equals: EntidadTipoSchema.optional(),
			in: EntidadTipoSchema.array().optional(),
			notIn: EntidadTipoSchema.array().optional(),
			not: z.union([EntidadTipoSchema, z.lazy(() => NestedEnumEntidadTipoWithAggregatesFilterObjectSchema)]).optional(),
			_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
			_min: z.lazy(() => NestedEnumEntidadTipoFilterObjectSchema).optional(),
			_max: z.lazy(() => NestedEnumEntidadTipoFilterObjectSchema).optional(),
		})
		.strict();
export const EnumEntidadTipoWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumEntidadTipoWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumEntidadTipoWithAggregatesFilter>;
export const EnumEntidadTipoWithAggregatesFilterObjectZodSchema = makeSchema();
