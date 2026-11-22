import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from "./IntNullableWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema.ts";

const configuracionscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => ConfiguracionScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => ConfiguracionScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => ConfiguracionScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ConfiguracionScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => ConfiguracionScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		id: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
		valor: z
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
		usuarioId: z
			.union([
				z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional()
			.nullable(),
		tipoId: z
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
export const ConfiguracionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ConfiguracionScalarWhereWithAggregatesInput> =
	configuracionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ConfiguracionScalarWhereWithAggregatesInput>;
export const ConfiguracionScalarWhereWithAggregatesInputObjectZodSchema =
	configuracionscalarwherewithaggregatesinputSchema;
