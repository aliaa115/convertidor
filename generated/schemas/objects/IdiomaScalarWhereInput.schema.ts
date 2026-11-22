import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const idiomascalarwhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => IdiomaScalarWhereInputObjectSchema),
				z.lazy(() => IdiomaScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => IdiomaScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => IdiomaScalarWhereInputObjectSchema),
				z.lazy(() => IdiomaScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		nombre: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		siglas: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
	})
	.strict();
export const IdiomaScalarWhereInputObjectSchema: z.ZodType<Prisma.IdiomaScalarWhereInput> =
	idiomascalarwhereinputSchema as unknown as z.ZodType<Prisma.IdiomaScalarWhereInput>;
export const IdiomaScalarWhereInputObjectZodSchema =
	idiomascalarwhereinputSchema;
