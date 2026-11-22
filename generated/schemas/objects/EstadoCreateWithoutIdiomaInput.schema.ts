import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateNestedManyWithoutEstadoInputObjectSchema as CapituloCreateNestedManyWithoutEstadoInputObjectSchema } from "./CapituloCreateNestedManyWithoutEstadoInput.schema.ts";
import { CategoriaCreateNestedManyWithoutEstadoInputObjectSchema as CategoriaCreateNestedManyWithoutEstadoInputObjectSchema } from "./CategoriaCreateNestedManyWithoutEstadoInput.schema.ts";
import { ComentarioCreateNestedManyWithoutEstadoInputObjectSchema as ComentarioCreateNestedManyWithoutEstadoInputObjectSchema } from "./ComentarioCreateNestedManyWithoutEstadoInput.schema.ts";
import { ConfiguracionCreateNestedManyWithoutEstadoInputObjectSchema as ConfiguracionCreateNestedManyWithoutEstadoInputObjectSchema } from "./ConfiguracionCreateNestedManyWithoutEstadoInput.schema.ts";
import { EscritorCreateNestedManyWithoutEstadoInputObjectSchema as EscritorCreateNestedManyWithoutEstadoInputObjectSchema } from "./EscritorCreateNestedManyWithoutEstadoInput.schema.ts";
import { EtiquetaCreateNestedManyWithoutEstadoInputObjectSchema as EtiquetaCreateNestedManyWithoutEstadoInputObjectSchema } from "./EtiquetaCreateNestedManyWithoutEstadoInput.schema.ts";
import { FavoritoCreateNestedManyWithoutEstadoInputObjectSchema as FavoritoCreateNestedManyWithoutEstadoInputObjectSchema } from "./FavoritoCreateNestedManyWithoutEstadoInput.schema.ts";
import { GlosarioCreateNestedManyWithoutEstadoInputObjectSchema as GlosarioCreateNestedManyWithoutEstadoInputObjectSchema } from "./GlosarioCreateNestedManyWithoutEstadoInput.schema.ts";
import { LibroCategoriaCreateNestedManyWithoutEstadoInputObjectSchema as LibroCategoriaCreateNestedManyWithoutEstadoInputObjectSchema } from "./LibroCategoriaCreateNestedManyWithoutEstadoInput.schema.ts";
import { LibroCreateNestedManyWithoutEstadoInputObjectSchema as LibroCreateNestedManyWithoutEstadoInputObjectSchema } from "./LibroCreateNestedManyWithoutEstadoInput.schema.ts";
import { LibroEtiquetaCreateNestedManyWithoutEstadoInputObjectSchema as LibroEtiquetaCreateNestedManyWithoutEstadoInputObjectSchema } from "./LibroEtiquetaCreateNestedManyWithoutEstadoInput.schema.ts";
import { ListaCreateNestedManyWithoutEstadoInputObjectSchema as ListaCreateNestedManyWithoutEstadoInputObjectSchema } from "./ListaCreateNestedManyWithoutEstadoInput.schema.ts";
import { ListaLibroCreateNestedManyWithoutEstadoInputObjectSchema as ListaLibroCreateNestedManyWithoutEstadoInputObjectSchema } from "./ListaLibroCreateNestedManyWithoutEstadoInput.schema.ts";
import { MarcadorCreateNestedManyWithoutEstadoInputObjectSchema as MarcadorCreateNestedManyWithoutEstadoInputObjectSchema } from "./MarcadorCreateNestedManyWithoutEstadoInput.schema.ts";
import { NotaAutorCreateNestedManyWithoutEstadoInputObjectSchema as NotaAutorCreateNestedManyWithoutEstadoInputObjectSchema } from "./NotaAutorCreateNestedManyWithoutEstadoInput.schema.ts";
import { ParrafoCreateNestedManyWithoutEstadoInputObjectSchema as ParrafoCreateNestedManyWithoutEstadoInputObjectSchema } from "./ParrafoCreateNestedManyWithoutEstadoInput.schema.ts";
import { SeguirUsuarioCreateNestedManyWithoutEstadoInputObjectSchema as SeguirUsuarioCreateNestedManyWithoutEstadoInputObjectSchema } from "./SeguirUsuarioCreateNestedManyWithoutEstadoInput.schema.ts";
import { TipoCreateNestedManyWithoutEstadoInputObjectSchema as TipoCreateNestedManyWithoutEstadoInputObjectSchema } from "./TipoCreateNestedManyWithoutEstadoInput.schema.ts";
import { UsuarioCreateNestedManyWithoutEstadoInputObjectSchema as UsuarioCreateNestedManyWithoutEstadoInputObjectSchema } from "./UsuarioCreateNestedManyWithoutEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string(),
			color: z.string().optional().nullable(),
			icon: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			categorias: z
				.lazy(() => CategoriaCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			etiquetas: z
				.lazy(() => EtiquetaCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			tipos: z
				.lazy(() => TipoCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			usuarios: z
				.lazy(() => UsuarioCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			escritores: z
				.lazy(() => EscritorCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			configuraciones: z
				.lazy(() => ConfiguracionCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			libros: z
				.lazy(() => LibroCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			capitulos: z
				.lazy(() => CapituloCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			parrafos: z
				.lazy(() => ParrafoCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			comentarios: z
				.lazy(() => ComentarioCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			libroCategorias: z
				.lazy(
					() => LibroCategoriaCreateNestedManyWithoutEstadoInputObjectSchema,
				)
				.optional(),
			libroEtiquetas: z
				.lazy(() => LibroEtiquetaCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			favoritos: z
				.lazy(() => FavoritoCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			glosarios: z
				.lazy(() => GlosarioCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			notasAutor: z
				.lazy(() => NotaAutorCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			marcadores: z
				.lazy(() => MarcadorCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			listas: z
				.lazy(() => ListaCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			listaLibros: z
				.lazy(() => ListaLibroCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
			seguirUsuarios: z
				.lazy(() => SeguirUsuarioCreateNestedManyWithoutEstadoInputObjectSchema)
				.optional(),
		})
		.strict();
export const EstadoCreateWithoutIdiomaInputObjectSchema: z.ZodType<Prisma.EstadoCreateWithoutIdiomaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateWithoutIdiomaInput>;
export const EstadoCreateWithoutIdiomaInputObjectZodSchema = makeSchema();
