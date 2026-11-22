import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema.ts";

const notaautorscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => NotaAutorScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => NotaAutorScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => NotaAutorScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => NotaAutorScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => NotaAutorScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		id: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
		texto: z
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
		capituloId: z
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
export const NotaAutorScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.NotaAutorScalarWhereWithAggregatesInput> =
	notaautorscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.NotaAutorScalarWhereWithAggregatesInput>;
export const NotaAutorScalarWhereWithAggregatesInputObjectZodSchema =
	notaautorscalarwherewithaggregatesinputSchema;
