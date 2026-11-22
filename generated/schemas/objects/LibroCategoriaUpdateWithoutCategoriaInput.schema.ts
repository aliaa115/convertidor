import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInput.schema.ts";
import { LibroUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema as LibroUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema } from "./LibroUpdateOneRequiredWithoutCategoriasNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInputObjectSchema).optional(),
			libro: z.lazy(() => LibroUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema).optional(),
		})
		.strict();
export const LibroCategoriaUpdateWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpdateWithoutCategoriaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateWithoutCategoriaInput>;
export const LibroCategoriaUpdateWithoutCategoriaInputObjectZodSchema = makeSchema();
