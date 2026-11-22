import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from "./IntNullableWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";

const listalibroscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z.union([z.lazy(() => ListaLibroScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ListaLibroScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => ListaLibroScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => ListaLibroScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ListaLibroScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		listaId: z
			.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		libroId: z
			.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		estadoId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const ListaLibroScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ListaLibroScalarWhereWithAggregatesInput> =
	listalibroscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ListaLibroScalarWhereWithAggregatesInput>;
export const ListaLibroScalarWhereWithAggregatesInputObjectZodSchema = listalibroscalarwherewithaggregatesinputSchema;
