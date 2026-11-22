import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema.ts";

const tiposcalarwherewithaggregatesinputSchema = z
	.object({
		AND: z.union([z.lazy(() => TipoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TipoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => TipoScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => TipoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TipoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
		nombre: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		tabla: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		estadoId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const TipoScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TipoScalarWhereWithAggregatesInput> =
	tiposcalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TipoScalarWhereWithAggregatesInput>;
export const TipoScalarWhereWithAggregatesInputObjectZodSchema = tiposcalarwherewithaggregatesinputSchema;
