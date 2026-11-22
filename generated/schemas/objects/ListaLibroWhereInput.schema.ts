import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";
import { LibroNullableScalarRelationFilterObjectSchema as LibroNullableScalarRelationFilterObjectSchema } from "./LibroNullableScalarRelationFilter.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";
import { ListaNullableScalarRelationFilterObjectSchema as ListaNullableScalarRelationFilterObjectSchema } from "./ListaNullableScalarRelationFilter.schema.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./ListaWhereInput.schema.ts";

const listalibrowhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => ListaLibroWhereInputObjectSchema),
				z.lazy(() => ListaLibroWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => ListaLibroWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ListaLibroWhereInputObjectSchema),
				z.lazy(() => ListaLibroWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		listaId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		libroId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		lista: z
			.union([
				z.lazy(() => ListaNullableScalarRelationFilterObjectSchema),
				z.lazy(() => ListaWhereInputObjectSchema),
			])
			.optional(),
		libro: z
			.union([
				z.lazy(() => LibroNullableScalarRelationFilterObjectSchema),
				z.lazy(() => LibroWhereInputObjectSchema),
			])
			.optional(),
		estado: z
			.union([
				z.lazy(() => EstadoScalarRelationFilterObjectSchema),
				z.lazy(() => EstadoWhereInputObjectSchema),
			])
			.optional(),
	})
	.strict();
export const ListaLibroWhereInputObjectSchema: z.ZodType<Prisma.ListaLibroWhereInput> =
	listalibrowhereinputSchema as unknown as z.ZodType<Prisma.ListaLibroWhereInput>;
export const ListaLibroWhereInputObjectZodSchema = listalibrowhereinputSchema;
