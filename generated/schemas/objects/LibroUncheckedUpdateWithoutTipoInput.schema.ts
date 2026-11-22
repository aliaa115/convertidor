import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema.ts";
import { CapituloUncheckedUpdateManyWithoutLibroNestedInputObjectSchema as CapituloUncheckedUpdateManyWithoutLibroNestedInputObjectSchema } from "./CapituloUncheckedUpdateManyWithoutLibroNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { FavoritoUncheckedUpdateManyWithoutLibroNestedInputObjectSchema as FavoritoUncheckedUpdateManyWithoutLibroNestedInputObjectSchema } from "./FavoritoUncheckedUpdateManyWithoutLibroNestedInput.schema.ts";
import { GlosarioUncheckedUpdateManyWithoutLibroNestedInputObjectSchema as GlosarioUncheckedUpdateManyWithoutLibroNestedInputObjectSchema } from "./GlosarioUncheckedUpdateManyWithoutLibroNestedInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";
import { LibroCategoriaUncheckedUpdateManyWithoutLibroNestedInputObjectSchema as LibroCategoriaUncheckedUpdateManyWithoutLibroNestedInputObjectSchema } from "./LibroCategoriaUncheckedUpdateManyWithoutLibroNestedInput.schema.ts";
import { LibroEtiquetaUncheckedUpdateManyWithoutLibroNestedInputObjectSchema as LibroEtiquetaUncheckedUpdateManyWithoutLibroNestedInputObjectSchema } from "./LibroEtiquetaUncheckedUpdateManyWithoutLibroNestedInput.schema.ts";
import { ListaLibroUncheckedUpdateManyWithoutLibroNestedInputObjectSchema as ListaLibroUncheckedUpdateManyWithoutLibroNestedInputObjectSchema } from "./ListaLibroUncheckedUpdateManyWithoutLibroNestedInput.schema.ts";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			titulo: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			resumen: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			portada: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			publicado: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
			fechaPublicacion: z
				.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			escritorId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			estadoId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			idiomaId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			capitulos: z.lazy(() => CapituloUncheckedUpdateManyWithoutLibroNestedInputObjectSchema).optional(),
			categorias: z.lazy(() => LibroCategoriaUncheckedUpdateManyWithoutLibroNestedInputObjectSchema).optional(),
			etiquetas: z.lazy(() => LibroEtiquetaUncheckedUpdateManyWithoutLibroNestedInputObjectSchema).optional(),
			favoritos: z.lazy(() => FavoritoUncheckedUpdateManyWithoutLibroNestedInputObjectSchema).optional(),
			glosarios: z.lazy(() => GlosarioUncheckedUpdateManyWithoutLibroNestedInputObjectSchema).optional(),
			listaLibros: z.lazy(() => ListaLibroUncheckedUpdateManyWithoutLibroNestedInputObjectSchema).optional(),
		})
		.strict();
export const LibroUncheckedUpdateWithoutTipoInputObjectSchema: z.ZodType<Prisma.LibroUncheckedUpdateWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUncheckedUpdateWithoutTipoInput>;
export const LibroUncheckedUpdateWithoutTipoInputObjectZodSchema = makeSchema();
