import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const escritorscalarwhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => EscritorScalarWhereInputObjectSchema),
				z.lazy(() => EscritorScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => EscritorScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => EscritorScalarWhereInputObjectSchema),
				z.lazy(() => EscritorScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		nombres: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		apellidos: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		alias: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		descripcion: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		fechaNacimiento: z
			.union([
				z.lazy(() => DateTimeNullableFilterObjectSchema),
				z.coerce.date(),
			])
			.optional()
			.nullable(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		usuarioId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		avatarId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
	})
	.strict();
export const EscritorScalarWhereInputObjectSchema: z.ZodType<Prisma.EscritorScalarWhereInput> =
	escritorscalarwhereinputSchema as unknown as z.ZodType<Prisma.EscritorScalarWhereInput>;
export const EscritorScalarWhereInputObjectZodSchema =
	escritorscalarwhereinputSchema;
