import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from "./IntNullableWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";

const favoritoscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => FavoritoScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => FavoritoScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => FavoritoScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => FavoritoScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => FavoritoScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		id: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
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
		escritorId: z
			.union([
				z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional()
			.nullable(),
		libroId: z
			.union([
				z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional()
			.nullable(),
		estadoId: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
	})
	.strict();
export const FavoritoScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FavoritoScalarWhereWithAggregatesInput> =
	favoritoscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FavoritoScalarWhereWithAggregatesInput>;
export const FavoritoScalarWhereWithAggregatesInputObjectZodSchema =
	favoritoscalarwherewithaggregatesinputSchema;
