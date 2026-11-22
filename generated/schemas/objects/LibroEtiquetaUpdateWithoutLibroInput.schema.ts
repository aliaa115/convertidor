import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInput.schema.ts";
import { EtiquetaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema as EtiquetaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema } from "./EtiquetaUpdateOneRequiredWithoutLibrosNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInputObjectSchema).optional(),
			etiqueta: z.lazy(() => EtiquetaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema).optional(),
		})
		.strict();
export const LibroEtiquetaUpdateWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpdateWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateWithoutLibroInput>;
export const LibroEtiquetaUpdateWithoutLibroInputObjectZodSchema = makeSchema();
