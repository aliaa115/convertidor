import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from "./IntNullableWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema.ts";

const parrafoscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z.union([z.lazy(() => ParrafoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ParrafoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => ParrafoScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => ParrafoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ParrafoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
		contenido: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		indice: z
			.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		capituloId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
		estadoId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const ParrafoScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ParrafoScalarWhereWithAggregatesInput> =
	parrafoscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ParrafoScalarWhereWithAggregatesInput>;
export const ParrafoScalarWhereWithAggregatesInputObjectZodSchema = parrafoscalarwherewithaggregatesinputSchema;
