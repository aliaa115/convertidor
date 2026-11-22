import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutEtiquetasNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutEtiquetasNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutEtiquetasNestedInput.schema.ts";
import { LibroEtiquetaUpdateManyWithoutEtiquetaNestedInputObjectSchema as LibroEtiquetaUpdateManyWithoutEtiquetaNestedInputObjectSchema } from "./LibroEtiquetaUpdateManyWithoutEtiquetaNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutEtiquetasNestedInputObjectSchema).optional(),
			libros: z.lazy(() => LibroEtiquetaUpdateManyWithoutEtiquetaNestedInputObjectSchema).optional(),
		})
		.strict();
export const EtiquetaUpdateInputObjectSchema: z.ZodType<Prisma.EtiquetaUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EtiquetaUpdateInput>;
export const EtiquetaUpdateInputObjectZodSchema = makeSchema();
