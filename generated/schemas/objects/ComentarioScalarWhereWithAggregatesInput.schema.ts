import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from "./IntNullableWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema.ts";

const comentarioscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => ComentarioScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => ComentarioScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => ComentarioScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ComentarioScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => ComentarioScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		id: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
		contenido: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
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
		comentarioPadreId: z
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
export const ComentarioScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ComentarioScalarWhereWithAggregatesInput> =
	comentarioscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ComentarioScalarWhereWithAggregatesInput>;
export const ComentarioScalarWhereWithAggregatesInputObjectZodSchema =
	comentarioscalarwherewithaggregatesinputSchema;
