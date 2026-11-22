import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from "./IntNullableWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema.ts";

const escritorscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z.union([z.lazy(() => EscritorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EscritorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => EscritorScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => EscritorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EscritorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
		nombres: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		apellidos: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		alias: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		descripcion: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)])
			.optional()
			.nullable(),
		fechaNacimiento: z
			.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		usuarioId: z
			.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		avatarId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
		estadoId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const EscritorScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EscritorScalarWhereWithAggregatesInput> =
	escritorscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.EscritorScalarWhereWithAggregatesInput>;
export const EscritorScalarWhereWithAggregatesInputObjectZodSchema = escritorscalarwherewithaggregatesinputSchema;
