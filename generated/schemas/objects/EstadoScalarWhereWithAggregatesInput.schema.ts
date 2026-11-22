import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema.ts";
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema.ts";

const estadoscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z.union([z.lazy(() => EstadoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EstadoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => EstadoScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => EstadoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EstadoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
		nombre: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		color: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		icon: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
	})
	.strict();
export const EstadoScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EstadoScalarWhereWithAggregatesInput> =
	estadoscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.EstadoScalarWhereWithAggregatesInput>;
export const EstadoScalarWhereWithAggregatesInputObjectZodSchema = estadoscalarwherewithaggregatesinputSchema;
