import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioListRelationFilterObjectSchema as ComentarioListRelationFilterObjectSchema } from "./ComentarioListRelationFilter.schema.ts";
import { ComentarioNullableScalarRelationFilterObjectSchema as ComentarioNullableScalarRelationFilterObjectSchema } from "./ComentarioNullableScalarRelationFilter.schema.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EscritorScalarRelationFilterObjectSchema as EscritorScalarRelationFilterObjectSchema } from "./EscritorScalarRelationFilter.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";
import { ParrafoScalarRelationFilterObjectSchema as ParrafoScalarRelationFilterObjectSchema } from "./ParrafoScalarRelationFilter.schema.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./ParrafoWhereInput.schema.ts";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema.ts";
import { TipoNullableScalarRelationFilterObjectSchema as TipoNullableScalarRelationFilterObjectSchema } from "./TipoNullableScalarRelationFilter.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";

const comentariowhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => ComentarioWhereInputObjectSchema),
				z.lazy(() => ComentarioWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => ComentarioWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ComentarioWhereInputObjectSchema),
				z.lazy(() => ComentarioWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		contenido: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		escritorId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		parrafoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		comentarioPadreId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		tipoId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		escritor: z
			.union([
				z.lazy(() => EscritorScalarRelationFilterObjectSchema),
				z.lazy(() => EscritorWhereInputObjectSchema),
			])
			.optional(),
		parrafo: z
			.union([
				z.lazy(() => ParrafoScalarRelationFilterObjectSchema),
				z.lazy(() => ParrafoWhereInputObjectSchema),
			])
			.optional(),
		padre: z
			.union([
				z.lazy(() => ComentarioNullableScalarRelationFilterObjectSchema),
				z.lazy(() => ComentarioWhereInputObjectSchema),
			])
			.optional(),
		respuestas: z
			.lazy(() => ComentarioListRelationFilterObjectSchema)
			.optional(),
		tipo: z
			.union([
				z.lazy(() => TipoNullableScalarRelationFilterObjectSchema),
				z.lazy(() => TipoWhereInputObjectSchema),
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
export const ComentarioWhereInputObjectSchema: z.ZodType<Prisma.ComentarioWhereInput> =
	comentariowhereinputSchema as unknown as z.ZodType<Prisma.ComentarioWhereInput>;
export const ComentarioWhereInputObjectZodSchema = comentariowhereinputSchema;
