import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInput.schema.ts";
import { EtiquetaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema as EtiquetaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema } from "./EtiquetaUpdateOneRequiredWithoutLibrosNestedInput.schema.ts";
import { LibroUpdateOneRequiredWithoutEtiquetasNestedInputObjectSchema as LibroUpdateOneRequiredWithoutEtiquetasNestedInputObjectSchema } from "./LibroUpdateOneRequiredWithoutEtiquetasNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInputObjectSchema).optional(),
			libro: z.lazy(() => LibroUpdateOneRequiredWithoutEtiquetasNestedInputObjectSchema).optional(),
			etiqueta: z.lazy(() => EtiquetaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema).optional(),
		})
		.strict();
export const LibroEtiquetaUpdateInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateInput>;
export const LibroEtiquetaUpdateInputObjectZodSchema = makeSchema();
