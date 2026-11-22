import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from "./BoolFilter.schema.ts";
import { CapituloListRelationFilterObjectSchema as CapituloListRelationFilterObjectSchema } from "./CapituloListRelationFilter.schema.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema.ts";
import { EscritorScalarRelationFilterObjectSchema as EscritorScalarRelationFilterObjectSchema } from "./EscritorScalarRelationFilter.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { FavoritoListRelationFilterObjectSchema as FavoritoListRelationFilterObjectSchema } from "./FavoritoListRelationFilter.schema.ts";
import { GlosarioListRelationFilterObjectSchema as GlosarioListRelationFilterObjectSchema } from "./GlosarioListRelationFilter.schema.ts";
import { IdiomaScalarRelationFilterObjectSchema as IdiomaScalarRelationFilterObjectSchema } from "./IdiomaScalarRelationFilter.schema.ts";
import { IdiomaWhereInputObjectSchema as IdiomaWhereInputObjectSchema } from "./IdiomaWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { LibroCategoriaListRelationFilterObjectSchema as LibroCategoriaListRelationFilterObjectSchema } from "./LibroCategoriaListRelationFilter.schema.ts";
import { LibroEtiquetaListRelationFilterObjectSchema as LibroEtiquetaListRelationFilterObjectSchema } from "./LibroEtiquetaListRelationFilter.schema.ts";
import { ListaLibroListRelationFilterObjectSchema as ListaLibroListRelationFilterObjectSchema } from "./ListaLibroListRelationFilter.schema.ts";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";
import { TipoScalarRelationFilterObjectSchema as TipoScalarRelationFilterObjectSchema } from "./TipoScalarRelationFilter.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";

const librowhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => LibroWhereInputObjectSchema),
				z.lazy(() => LibroWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => LibroWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => LibroWhereInputObjectSchema),
				z.lazy(() => LibroWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		titulo: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		resumen: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		portada: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		publicado: z
			.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
			.optional(),
		fechaPublicacion: z
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
		escritorId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		tipoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		idiomaId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		escritor: z
			.union([
				z.lazy(() => EscritorScalarRelationFilterObjectSchema),
				z.lazy(() => EscritorWhereInputObjectSchema),
			])
			.optional(),
		tipo: z
			.union([
				z.lazy(() => TipoScalarRelationFilterObjectSchema),
				z.lazy(() => TipoWhereInputObjectSchema),
			])
			.optional(),
		estado: z
			.union([
				z.lazy(() => EstadoScalarRelationFilterObjectSchema),
				z.lazy(() => EstadoWhereInputObjectSchema),
			])
			.optional(),
		idioma: z
			.union([
				z.lazy(() => IdiomaScalarRelationFilterObjectSchema),
				z.lazy(() => IdiomaWhereInputObjectSchema),
			])
			.optional(),
		capitulos: z.lazy(() => CapituloListRelationFilterObjectSchema).optional(),
		categorias: z
			.lazy(() => LibroCategoriaListRelationFilterObjectSchema)
			.optional(),
		etiquetas: z
			.lazy(() => LibroEtiquetaListRelationFilterObjectSchema)
			.optional(),
		favoritos: z.lazy(() => FavoritoListRelationFilterObjectSchema).optional(),
		glosarios: z.lazy(() => GlosarioListRelationFilterObjectSchema).optional(),
		listaLibros: z
			.lazy(() => ListaLibroListRelationFilterObjectSchema)
			.optional(),
	})
	.strict();
export const LibroWhereInputObjectSchema: z.ZodType<Prisma.LibroWhereInput> =
	librowhereinputSchema as unknown as z.ZodType<Prisma.LibroWhereInput>;
export const LibroWhereInputObjectZodSchema = librowhereinputSchema;
