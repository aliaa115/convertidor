import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { LibroCategoriaListRelationFilterObjectSchema as LibroCategoriaListRelationFilterObjectSchema } from "./LibroCategoriaListRelationFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const categoriawhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => CategoriaWhereInputObjectSchema),
				z.lazy(() => CategoriaWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => CategoriaWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => CategoriaWhereInputObjectSchema),
				z.lazy(() => CategoriaWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		nombre: z
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
		libros: z
			.lazy(() => LibroCategoriaListRelationFilterObjectSchema)
			.optional(),
	})
	.strict();
export const CategoriaWhereInputObjectSchema: z.ZodType<Prisma.CategoriaWhereInput> =
	categoriawhereinputSchema as unknown as z.ZodType<Prisma.CategoriaWhereInput>;
export const CategoriaWhereInputObjectZodSchema = categoriawhereinputSchema;
