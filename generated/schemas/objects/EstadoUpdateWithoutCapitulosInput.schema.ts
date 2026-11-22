import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CategoriaUpdateManyWithoutEstadoNestedInputObjectSchema as CategoriaUpdateManyWithoutEstadoNestedInputObjectSchema } from "./CategoriaUpdateManyWithoutEstadoNestedInput.schema.ts";
import { ComentarioUpdateManyWithoutEstadoNestedInputObjectSchema as ComentarioUpdateManyWithoutEstadoNestedInputObjectSchema } from "./ComentarioUpdateManyWithoutEstadoNestedInput.schema.ts";
import { ConfiguracionUpdateManyWithoutEstadoNestedInputObjectSchema as ConfiguracionUpdateManyWithoutEstadoNestedInputObjectSchema } from "./ConfiguracionUpdateManyWithoutEstadoNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateManyWithoutEstadoNestedInputObjectSchema as EscritorUpdateManyWithoutEstadoNestedInputObjectSchema } from "./EscritorUpdateManyWithoutEstadoNestedInput.schema.ts";
import { EtiquetaUpdateManyWithoutEstadoNestedInputObjectSchema as EtiquetaUpdateManyWithoutEstadoNestedInputObjectSchema } from "./EtiquetaUpdateManyWithoutEstadoNestedInput.schema.ts";
import { FavoritoUpdateManyWithoutEstadoNestedInputObjectSchema as FavoritoUpdateManyWithoutEstadoNestedInputObjectSchema } from "./FavoritoUpdateManyWithoutEstadoNestedInput.schema.ts";
import { GlosarioUpdateManyWithoutEstadoNestedInputObjectSchema as GlosarioUpdateManyWithoutEstadoNestedInputObjectSchema } from "./GlosarioUpdateManyWithoutEstadoNestedInput.schema.ts";
import { IdiomaUpdateManyWithoutEstadoNestedInputObjectSchema as IdiomaUpdateManyWithoutEstadoNestedInputObjectSchema } from "./IdiomaUpdateManyWithoutEstadoNestedInput.schema.ts";
import { LibroCategoriaUpdateManyWithoutEstadoNestedInputObjectSchema as LibroCategoriaUpdateManyWithoutEstadoNestedInputObjectSchema } from "./LibroCategoriaUpdateManyWithoutEstadoNestedInput.schema.ts";
import { LibroEtiquetaUpdateManyWithoutEstadoNestedInputObjectSchema as LibroEtiquetaUpdateManyWithoutEstadoNestedInputObjectSchema } from "./LibroEtiquetaUpdateManyWithoutEstadoNestedInput.schema.ts";
import { LibroUpdateManyWithoutEstadoNestedInputObjectSchema as LibroUpdateManyWithoutEstadoNestedInputObjectSchema } from "./LibroUpdateManyWithoutEstadoNestedInput.schema.ts";
import { ListaLibroUpdateManyWithoutEstadoNestedInputObjectSchema as ListaLibroUpdateManyWithoutEstadoNestedInputObjectSchema } from "./ListaLibroUpdateManyWithoutEstadoNestedInput.schema.ts";
import { ListaUpdateManyWithoutEstadoNestedInputObjectSchema as ListaUpdateManyWithoutEstadoNestedInputObjectSchema } from "./ListaUpdateManyWithoutEstadoNestedInput.schema.ts";
import { MarcadorUpdateManyWithoutEstadoNestedInputObjectSchema as MarcadorUpdateManyWithoutEstadoNestedInputObjectSchema } from "./MarcadorUpdateManyWithoutEstadoNestedInput.schema.ts";
import { NotaAutorUpdateManyWithoutEstadoNestedInputObjectSchema as NotaAutorUpdateManyWithoutEstadoNestedInputObjectSchema } from "./NotaAutorUpdateManyWithoutEstadoNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";
import { ParrafoUpdateManyWithoutEstadoNestedInputObjectSchema as ParrafoUpdateManyWithoutEstadoNestedInputObjectSchema } from "./ParrafoUpdateManyWithoutEstadoNestedInput.schema.ts";
import { SeguirUsuarioUpdateManyWithoutEstadoNestedInputObjectSchema as SeguirUsuarioUpdateManyWithoutEstadoNestedInputObjectSchema } from "./SeguirUsuarioUpdateManyWithoutEstadoNestedInput.schema.ts";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.ts";
import { TipoUpdateManyWithoutEstadoNestedInputObjectSchema as TipoUpdateManyWithoutEstadoNestedInputObjectSchema } from "./TipoUpdateManyWithoutEstadoNestedInput.schema.ts";
import { UsuarioUpdateManyWithoutEstadoNestedInputObjectSchema as UsuarioUpdateManyWithoutEstadoNestedInputObjectSchema } from "./UsuarioUpdateManyWithoutEstadoNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			color: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			icon: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			createdAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			updatedAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			categorias: z
				.lazy(() => CategoriaUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			etiquetas: z
				.lazy(() => EtiquetaUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			tipos: z
				.lazy(() => TipoUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			usuarios: z
				.lazy(() => UsuarioUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			escritores: z
				.lazy(() => EscritorUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			configuraciones: z
				.lazy(() => ConfiguracionUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			idioma: z
				.lazy(() => IdiomaUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			libros: z
				.lazy(() => LibroUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			parrafos: z
				.lazy(() => ParrafoUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			comentarios: z
				.lazy(() => ComentarioUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			libroCategorias: z
				.lazy(
					() => LibroCategoriaUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			libroEtiquetas: z
				.lazy(() => LibroEtiquetaUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			favoritos: z
				.lazy(() => FavoritoUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			glosarios: z
				.lazy(() => GlosarioUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			notasAutor: z
				.lazy(() => NotaAutorUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			marcadores: z
				.lazy(() => MarcadorUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			listas: z
				.lazy(() => ListaUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			listaLibros: z
				.lazy(() => ListaLibroUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			seguirUsuarios: z
				.lazy(() => SeguirUsuarioUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
		})
		.strict();
export const EstadoUpdateWithoutCapitulosInputObjectSchema: z.ZodType<Prisma.EstadoUpdateWithoutCapitulosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateWithoutCapitulosInput>;
export const EstadoUpdateWithoutCapitulosInputObjectZodSchema = makeSchema();
