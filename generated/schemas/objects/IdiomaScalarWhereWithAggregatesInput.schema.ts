import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema.ts";

const idiomascalarwherewithaggregatesinputSchema = z
	.object({
		AND: z.union([z.lazy(() => IdiomaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => IdiomaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => IdiomaScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => IdiomaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => IdiomaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
		nombre: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		siglas: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		estadoId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const IdiomaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.IdiomaScalarWhereWithAggregatesInput> =
	idiomascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.IdiomaScalarWhereWithAggregatesInput>;
export const IdiomaScalarWhereWithAggregatesInputObjectZodSchema = idiomascalarwherewithaggregatesinputSchema;
