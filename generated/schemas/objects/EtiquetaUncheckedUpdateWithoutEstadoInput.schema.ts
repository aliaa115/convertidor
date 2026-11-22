import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";
import { LibroEtiquetaUncheckedUpdateManyWithoutEtiquetaNestedInputObjectSchema as LibroEtiquetaUncheckedUpdateManyWithoutEtiquetaNestedInputObjectSchema } from "./LibroEtiquetaUncheckedUpdateManyWithoutEtiquetaNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			nombre: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			libros: z.lazy(() => LibroEtiquetaUncheckedUpdateManyWithoutEtiquetaNestedInputObjectSchema).optional(),
		})
		.strict();
export const EtiquetaUncheckedUpdateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.EtiquetaUncheckedUpdateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaUncheckedUpdateWithoutEstadoInput>;
export const EtiquetaUncheckedUpdateWithoutEstadoInputObjectZodSchema = makeSchema();
