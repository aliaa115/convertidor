import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as CapituloUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./CapituloUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { CategoriaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as CategoriaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./CategoriaUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { ComentarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as ComentarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./ComentarioUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { ConfiguracionUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as ConfiguracionUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./ConfiguracionUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { EscritorUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as EscritorUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./EscritorUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { EtiquetaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as EtiquetaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./EtiquetaUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { FavoritoUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as FavoritoUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./FavoritoUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { GlosarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as GlosarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./GlosarioUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { IdiomaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as IdiomaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./IdiomaUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { LibroCategoriaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as LibroCategoriaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./LibroCategoriaUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { LibroEtiquetaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as LibroEtiquetaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./LibroEtiquetaUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { LibroUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as LibroUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./LibroUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { ListaLibroUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as ListaLibroUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./ListaLibroUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { ListaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as ListaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./ListaUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { MarcadorUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as MarcadorUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./MarcadorUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { NotaAutorUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as NotaAutorUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./NotaAutorUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { ParrafoUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as ParrafoUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./ParrafoUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { SeguirUsuarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as SeguirUsuarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./SeguirUsuarioUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { TipoUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as TipoUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./TipoUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";
import { UsuarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema as UsuarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from "./UsuarioUncheckedCreateNestedManyWithoutEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string(),
			color: z.string().optional().nullable(),
			icon: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			categorias: z.lazy(() => CategoriaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			etiquetas: z.lazy(() => EtiquetaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			tipos: z.lazy(() => TipoUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			usuarios: z.lazy(() => UsuarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			escritores: z.lazy(() => EscritorUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			configuraciones: z.lazy(() => ConfiguracionUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			idioma: z.lazy(() => IdiomaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			libros: z.lazy(() => LibroUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			capitulos: z.lazy(() => CapituloUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			parrafos: z.lazy(() => ParrafoUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			comentarios: z.lazy(() => ComentarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			libroCategorias: z.lazy(() => LibroCategoriaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			libroEtiquetas: z.lazy(() => LibroEtiquetaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			favoritos: z.lazy(() => FavoritoUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			glosarios: z.lazy(() => GlosarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			notasAutor: z.lazy(() => NotaAutorUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			marcadores: z.lazy(() => MarcadorUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			listas: z.lazy(() => ListaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			listaLibros: z.lazy(() => ListaLibroUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
			seguirUsuarios: z.lazy(() => SeguirUsuarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EstadoUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUncheckedCreateInput>;
export const EstadoUncheckedCreateInputObjectZodSchema = makeSchema();
