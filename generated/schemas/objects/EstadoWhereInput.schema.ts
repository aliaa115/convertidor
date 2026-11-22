import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloListRelationFilterObjectSchema as CapituloListRelationFilterObjectSchema } from "./CapituloListRelationFilter.schema.ts";
import { CategoriaListRelationFilterObjectSchema as CategoriaListRelationFilterObjectSchema } from "./CategoriaListRelationFilter.schema.ts";
import { ComentarioListRelationFilterObjectSchema as ComentarioListRelationFilterObjectSchema } from "./ComentarioListRelationFilter.schema.ts";
import { ConfiguracionListRelationFilterObjectSchema as ConfiguracionListRelationFilterObjectSchema } from "./ConfiguracionListRelationFilter.schema.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EscritorListRelationFilterObjectSchema as EscritorListRelationFilterObjectSchema } from "./EscritorListRelationFilter.schema.ts";
import { EtiquetaListRelationFilterObjectSchema as EtiquetaListRelationFilterObjectSchema } from "./EtiquetaListRelationFilter.schema.ts";
import { FavoritoListRelationFilterObjectSchema as FavoritoListRelationFilterObjectSchema } from "./FavoritoListRelationFilter.schema.ts";
import { GlosarioListRelationFilterObjectSchema as GlosarioListRelationFilterObjectSchema } from "./GlosarioListRelationFilter.schema.ts";
import { IdiomaListRelationFilterObjectSchema as IdiomaListRelationFilterObjectSchema } from "./IdiomaListRelationFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { LibroCategoriaListRelationFilterObjectSchema as LibroCategoriaListRelationFilterObjectSchema } from "./LibroCategoriaListRelationFilter.schema.ts";
import { LibroEtiquetaListRelationFilterObjectSchema as LibroEtiquetaListRelationFilterObjectSchema } from "./LibroEtiquetaListRelationFilter.schema.ts";
import { LibroListRelationFilterObjectSchema as LibroListRelationFilterObjectSchema } from "./LibroListRelationFilter.schema.ts";
import { ListaLibroListRelationFilterObjectSchema as ListaLibroListRelationFilterObjectSchema } from "./ListaLibroListRelationFilter.schema.ts";
import { ListaListRelationFilterObjectSchema as ListaListRelationFilterObjectSchema } from "./ListaListRelationFilter.schema.ts";
import { MarcadorListRelationFilterObjectSchema as MarcadorListRelationFilterObjectSchema } from "./MarcadorListRelationFilter.schema.ts";
import { NotaAutorListRelationFilterObjectSchema as NotaAutorListRelationFilterObjectSchema } from "./NotaAutorListRelationFilter.schema.ts";
import { ParrafoListRelationFilterObjectSchema as ParrafoListRelationFilterObjectSchema } from "./ParrafoListRelationFilter.schema.ts";
import { SeguirUsuarioListRelationFilterObjectSchema as SeguirUsuarioListRelationFilterObjectSchema } from "./SeguirUsuarioListRelationFilter.schema.ts";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";
import { TipoListRelationFilterObjectSchema as TipoListRelationFilterObjectSchema } from "./TipoListRelationFilter.schema.ts";
import { UsuarioListRelationFilterObjectSchema as UsuarioListRelationFilterObjectSchema } from "./UsuarioListRelationFilter.schema.ts";

const estadowhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => EstadoWhereInputObjectSchema), z.lazy(() => EstadoWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => EstadoWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => EstadoWhereInputObjectSchema), z.lazy(() => EstadoWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		color: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		icon: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		categorias: z.lazy(() => CategoriaListRelationFilterObjectSchema).optional(),
		etiquetas: z.lazy(() => EtiquetaListRelationFilterObjectSchema).optional(),
		tipos: z.lazy(() => TipoListRelationFilterObjectSchema).optional(),
		usuarios: z.lazy(() => UsuarioListRelationFilterObjectSchema).optional(),
		escritores: z.lazy(() => EscritorListRelationFilterObjectSchema).optional(),
		configuraciones: z.lazy(() => ConfiguracionListRelationFilterObjectSchema).optional(),
		idioma: z.lazy(() => IdiomaListRelationFilterObjectSchema).optional(),
		libros: z.lazy(() => LibroListRelationFilterObjectSchema).optional(),
		capitulos: z.lazy(() => CapituloListRelationFilterObjectSchema).optional(),
		parrafos: z.lazy(() => ParrafoListRelationFilterObjectSchema).optional(),
		comentarios: z.lazy(() => ComentarioListRelationFilterObjectSchema).optional(),
		libroCategorias: z.lazy(() => LibroCategoriaListRelationFilterObjectSchema).optional(),
		libroEtiquetas: z.lazy(() => LibroEtiquetaListRelationFilterObjectSchema).optional(),
		favoritos: z.lazy(() => FavoritoListRelationFilterObjectSchema).optional(),
		glosarios: z.lazy(() => GlosarioListRelationFilterObjectSchema).optional(),
		notasAutor: z.lazy(() => NotaAutorListRelationFilterObjectSchema).optional(),
		marcadores: z.lazy(() => MarcadorListRelationFilterObjectSchema).optional(),
		listas: z.lazy(() => ListaListRelationFilterObjectSchema).optional(),
		listaLibros: z.lazy(() => ListaLibroListRelationFilterObjectSchema).optional(),
		seguirUsuarios: z.lazy(() => SeguirUsuarioListRelationFilterObjectSchema).optional(),
	})
	.strict();
export const EstadoWhereInputObjectSchema: z.ZodType<Prisma.EstadoWhereInput> = estadowhereinputSchema as unknown as z.ZodType<Prisma.EstadoWhereInput>;
export const EstadoWhereInputObjectZodSchema = estadowhereinputSchema;
