import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema.ts";

const etiquetascalarwherewithaggregatesinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => EtiquetaScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => EtiquetaScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => EtiquetaScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => EtiquetaScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => EtiquetaScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		id: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
		nombre: z
			.union([
				z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
				z.string(),
			])
			.optional()
			.nullable(),
		createdAt: z
			.union([
				z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
				z.coerce.date(),
			])
			.optional(),
		updatedAt: z
			.union([
				z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
				z.coerce.date(),
			])
			.optional(),
		estadoId: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
	})
	.strict();
export const EtiquetaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EtiquetaScalarWhereWithAggregatesInput> =
	etiquetascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.EtiquetaScalarWhereWithAggregatesInput>;
export const EtiquetaScalarWhereWithAggregatesInputObjectZodSchema =
	etiquetascalarwherewithaggregatesinputSchema;
