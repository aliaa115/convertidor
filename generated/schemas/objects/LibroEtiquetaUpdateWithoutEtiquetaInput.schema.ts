import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInput.schema.ts";
import { LibroUpdateOneRequiredWithoutEtiquetasNestedInputObjectSchema as LibroUpdateOneRequiredWithoutEtiquetasNestedInputObjectSchema } from "./LibroUpdateOneRequiredWithoutEtiquetasNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
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
			estado: z
				.lazy(
					() =>
						EstadoUpdateOneRequiredWithoutLibroEtiquetasNestedInputObjectSchema,
				)
				.optional(),
			libro: z
				.lazy(
					() => LibroUpdateOneRequiredWithoutEtiquetasNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const LibroEtiquetaUpdateWithoutEtiquetaInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpdateWithoutEtiquetaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateWithoutEtiquetaInput>;
export const LibroEtiquetaUpdateWithoutEtiquetaInputObjectZodSchema =
	makeSchema();
