import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema.ts";

const categoriascalarwherewithaggregatesinputSchema = z
	.object({
		AND: z.union([z.lazy(() => CategoriaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CategoriaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => CategoriaScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => CategoriaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CategoriaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
		nombre: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		estadoId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const CategoriaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CategoriaScalarWhereWithAggregatesInput> =
	categoriascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CategoriaScalarWhereWithAggregatesInput>;
export const CategoriaScalarWhereWithAggregatesInputObjectZodSchema = categoriascalarwherewithaggregatesinputSchema;
