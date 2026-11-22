import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { LibroListRelationFilterObjectSchema as LibroListRelationFilterObjectSchema } from "./LibroListRelationFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const idiomawhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => IdiomaWhereInputObjectSchema),
				z.lazy(() => IdiomaWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => IdiomaWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => IdiomaWhereInputObjectSchema),
				z.lazy(() => IdiomaWhereInputObjectSchema).array(),
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
		estado: z
			.union([
				z.lazy(() => EstadoScalarRelationFilterObjectSchema),
				z.lazy(() => EstadoWhereInputObjectSchema),
			])
			.optional(),
		libros: z.lazy(() => LibroListRelationFilterObjectSchema).optional(),
	})
	.strict();
export const IdiomaWhereInputObjectSchema: z.ZodType<Prisma.IdiomaWhereInput> =
	idiomawhereinputSchema as unknown as z.ZodType<Prisma.IdiomaWhereInput>;
export const IdiomaWhereInputObjectZodSchema = idiomawhereinputSchema;
