import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as CapituloUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./CapituloUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { CategoriaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as CategoriaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./CategoriaUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { ComentarioUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as ComentarioUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./ComentarioUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { ConfiguracionUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as ConfiguracionUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./ConfiguracionUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as EscritorUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./EscritorUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { EtiquetaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as EtiquetaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./EtiquetaUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { FavoritoUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as FavoritoUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./FavoritoUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { GlosarioUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as GlosarioUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./GlosarioUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { IdiomaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as IdiomaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./IdiomaUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";
import { LibroEtiquetaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as LibroEtiquetaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./LibroEtiquetaUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { LibroUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as LibroUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./LibroUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { ListaLibroUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as ListaLibroUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./ListaLibroUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { ListaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as ListaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./ListaUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { MarcadorUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as MarcadorUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./MarcadorUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { NotaAutorUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as NotaAutorUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./NotaAutorUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";
import { ParrafoUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as ParrafoUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./ParrafoUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { SeguirUsuarioUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as SeguirUsuarioUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./SeguirUsuarioUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.ts";
import { TipoUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as TipoUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./TipoUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";
import { UsuarioUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema as UsuarioUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from "./UsuarioUncheckedUpdateManyWithoutEstadoNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z
				.union([
					z.number().int(),
					z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
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
				.lazy(
					() =>
						CategoriaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			etiquetas: z
				.lazy(
					() => EtiquetaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			tipos: z
				.lazy(() => TipoUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema)
				.optional(),
			usuarios: z
				.lazy(
					() => UsuarioUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			escritores: z
				.lazy(
					() => EscritorUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			configuraciones: z
				.lazy(
					() =>
						ConfiguracionUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			idioma: z
				.lazy(
					() => IdiomaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			libros: z
				.lazy(
					() => LibroUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			capitulos: z
				.lazy(
					() => CapituloUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			parrafos: z
				.lazy(
					() => ParrafoUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			comentarios: z
				.lazy(
					() =>
						ComentarioUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			libroEtiquetas: z
				.lazy(
					() =>
						LibroEtiquetaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			favoritos: z
				.lazy(
					() => FavoritoUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			glosarios: z
				.lazy(
					() => GlosarioUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			notasAutor: z
				.lazy(
					() =>
						NotaAutorUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			marcadores: z
				.lazy(
					() => MarcadorUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			listas: z
				.lazy(
					() => ListaUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			listaLibros: z
				.lazy(
					() =>
						ListaLibroUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
			seguirUsuarios: z
				.lazy(
					() =>
						SeguirUsuarioUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const EstadoUncheckedUpdateWithoutLibroCategoriasInputObjectSchema: z.ZodType<Prisma.EstadoUncheckedUpdateWithoutLibroCategoriasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUncheckedUpdateWithoutLibroCategoriasInput>;
export const EstadoUncheckedUpdateWithoutLibroCategoriasInputObjectZodSchema =
	makeSchema();
