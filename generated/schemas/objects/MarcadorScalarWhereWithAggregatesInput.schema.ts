import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema.ts";

const marcadorscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => MarcadorScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => MarcadorScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => MarcadorScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => MarcadorScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => MarcadorScalarWhereWithAggregatesInputObjectSchema)
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
		color: z
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
		escritorId: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
		parrafoId: z
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
export const MarcadorScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MarcadorScalarWhereWithAggregatesInput> =
	marcadorscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MarcadorScalarWhereWithAggregatesInput>;
export const MarcadorScalarWhereWithAggregatesInputObjectZodSchema =
	marcadorscalarwherewithaggregatesinputSchema;
