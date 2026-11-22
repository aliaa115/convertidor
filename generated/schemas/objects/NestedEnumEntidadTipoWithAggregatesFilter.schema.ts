import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EntidadTipoSchema } from "../enums/EntidadTipo.schema.ts";
import { NestedEnumEntidadTipoFilterObjectSchema as NestedEnumEntidadTipoFilterObjectSchema } from "./NestedEnumEntidadTipoFilter.schema.ts";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema.ts";

const nestedenumentidadtipowithaggregatesfilterSchema = z
	.object({
		equals: EntidadTipoSchema.optional(),
		in: EntidadTipoSchema.array().optional(),
		notIn: EntidadTipoSchema.array().optional(),
		not: z
			.union([
				EntidadTipoSchema,
				z.lazy(() => NestedEnumEntidadTipoWithAggregatesFilterObjectSchema),
			])
			.optional(),
		_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
		_min: z.lazy(() => NestedEnumEntidadTipoFilterObjectSchema).optional(),
		_max: z.lazy(() => NestedEnumEntidadTipoFilterObjectSchema).optional(),
	})
	.strict();
export const NestedEnumEntidadTipoWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumEntidadTipoWithAggregatesFilter> =
	nestedenumentidadtipowithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumEntidadTipoWithAggregatesFilter>;
export const NestedEnumEntidadTipoWithAggregatesFilterObjectZodSchema =
	nestedenumentidadtipowithaggregatesfilterSchema;
