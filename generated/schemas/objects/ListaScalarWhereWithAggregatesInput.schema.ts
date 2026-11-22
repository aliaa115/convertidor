import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from "./BoolWithAggregatesFilter.schema.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from "./IntNullableWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema.ts";

const listascalarwherewithaggregatesinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => ListaScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => ListaScalarWhereWithAggregatesInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => ListaScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ListaScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => ListaScalarWhereWithAggregatesInputObjectSchema).array(),
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
		privada: z
			.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
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
		usuarioId: z
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
export const ListaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ListaScalarWhereWithAggregatesInput> =
	listascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ListaScalarWhereWithAggregatesInput>;
export const ListaScalarWhereWithAggregatesInputObjectZodSchema =
	listascalarwherewithaggregatesinputSchema;
