import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema.ts";
import { CapituloUpdateManyWithoutLibroNestedInputObjectSchema as CapituloUpdateManyWithoutLibroNestedInputObjectSchema } from "./CapituloUpdateManyWithoutLibroNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateOneRequiredWithoutLibrosNestedInputObjectSchema as EscritorUpdateOneRequiredWithoutLibrosNestedInputObjectSchema } from "./EscritorUpdateOneRequiredWithoutLibrosNestedInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutLibrosNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutLibrosNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutLibrosNestedInput.schema.ts";
import { GlosarioUpdateManyWithoutLibroNestedInputObjectSchema as GlosarioUpdateManyWithoutLibroNestedInputObjectSchema } from "./GlosarioUpdateManyWithoutLibroNestedInput.schema.ts";
import { IdiomaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema as IdiomaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema } from "./IdiomaUpdateOneRequiredWithoutLibrosNestedInput.schema.ts";
import { LibroCategoriaUpdateManyWithoutLibroNestedInputObjectSchema as LibroCategoriaUpdateManyWithoutLibroNestedInputObjectSchema } from "./LibroCategoriaUpdateManyWithoutLibroNestedInput.schema.ts";
import { LibroEtiquetaUpdateManyWithoutLibroNestedInputObjectSchema as LibroEtiquetaUpdateManyWithoutLibroNestedInputObjectSchema } from "./LibroEtiquetaUpdateManyWithoutLibroNestedInput.schema.ts";
import { ListaLibroUpdateManyWithoutLibroNestedInputObjectSchema as ListaLibroUpdateManyWithoutLibroNestedInputObjectSchema } from "./ListaLibroUpdateManyWithoutLibroNestedInput.schema.ts";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.ts";
import { TipoUpdateOneRequiredWithoutLibrosNestedInputObjectSchema as TipoUpdateOneRequiredWithoutLibrosNestedInputObjectSchema } from "./TipoUpdateOneRequiredWithoutLibrosNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			titulo: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			resumen: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			portada: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			publicado: z
				.union([
					z.boolean(),
					z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			fechaPublicacion: z
				.union([
					z.coerce.date(),
					z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
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
			escritor: z
				.lazy(
					() => EscritorUpdateOneRequiredWithoutLibrosNestedInputObjectSchema,
				)
				.optional(),
			tipo: z
				.lazy(() => TipoUpdateOneRequiredWithoutLibrosNestedInputObjectSchema)
				.optional(),
			estado: z
				.lazy(() => EstadoUpdateOneRequiredWithoutLibrosNestedInputObjectSchema)
				.optional(),
			idioma: z
				.lazy(() => IdiomaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema)
				.optional(),
			capitulos: z
				.lazy(() => CapituloUpdateManyWithoutLibroNestedInputObjectSchema)
				.optional(),
			categorias: z
				.lazy(() => LibroCategoriaUpdateManyWithoutLibroNestedInputObjectSchema)
				.optional(),
			etiquetas: z
				.lazy(() => LibroEtiquetaUpdateManyWithoutLibroNestedInputObjectSchema)
				.optional(),
			glosarios: z
				.lazy(() => GlosarioUpdateManyWithoutLibroNestedInputObjectSchema)
				.optional(),
			listaLibros: z
				.lazy(() => ListaLibroUpdateManyWithoutLibroNestedInputObjectSchema)
				.optional(),
		})
		.strict();
export const LibroUpdateWithoutFavoritosInputObjectSchema: z.ZodType<Prisma.LibroUpdateWithoutFavoritosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateWithoutFavoritosInput>;
export const LibroUpdateWithoutFavoritosInputObjectZodSchema = makeSchema();
