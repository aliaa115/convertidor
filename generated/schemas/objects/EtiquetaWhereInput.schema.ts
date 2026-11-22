import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { LibroEtiquetaListRelationFilterObjectSchema as LibroEtiquetaListRelationFilterObjectSchema } from "./LibroEtiquetaListRelationFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const etiquetawhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => EtiquetaWhereInputObjectSchema),
				z.lazy(() => EtiquetaWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => EtiquetaWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => EtiquetaWhereInputObjectSchema),
				z.lazy(() => EtiquetaWhereInputObjectSchema).array(),
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
			.lazy(() => LibroEtiquetaListRelationFilterObjectSchema)
			.optional(),
	})
	.strict();
export const EtiquetaWhereInputObjectSchema: z.ZodType<Prisma.EtiquetaWhereInput> =
	etiquetawhereinputSchema as unknown as z.ZodType<Prisma.EtiquetaWhereInput>;
export const EtiquetaWhereInputObjectZodSchema = etiquetawhereinputSchema;
