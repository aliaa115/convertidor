import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from "./IntNullableWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema.ts";

const capituloscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => CapituloScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => CapituloScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => CapituloScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => CapituloScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => CapituloScalarWhereWithAggregatesInputObjectSchema)
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
		indice: z
			.union([
				z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
				z.number().int(),
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
		libroId: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
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
export const CapituloScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CapituloScalarWhereWithAggregatesInput> =
	capituloscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CapituloScalarWhereWithAggregatesInput>;
export const CapituloScalarWhereWithAggregatesInputObjectZodSchema =
	capituloscalarwherewithaggregatesinputSchema;
