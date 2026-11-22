import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from "./BoolWithAggregatesFilter.schema.ts";
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema.ts";
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema.ts";

const libroscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => LibroScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => LibroScalarWhereWithAggregatesInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => LibroScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => LibroScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => LibroScalarWhereWithAggregatesInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
		titulo: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		resumen: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		portada: z
			.union([
				z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
				z.string(),
			])
			.optional()
			.nullable(),
		publicado: z
			.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
			.optional(),
		fechaPublicacion: z
			.union([
				z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
				z.coerce.date(),
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
		tipoId: z
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
		idiomaId: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
	})
	.strict();
export const LibroScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.LibroScalarWhereWithAggregatesInput> =
	libroscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.LibroScalarWhereWithAggregatesInput>;
export const LibroScalarWhereWithAggregatesInputObjectZodSchema =
	libroscalarwherewithaggregatesinputSchema;
