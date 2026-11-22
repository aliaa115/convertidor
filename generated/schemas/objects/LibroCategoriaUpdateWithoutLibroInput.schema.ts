import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CategoriaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema as CategoriaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema } from "./CategoriaUpdateOneRequiredWithoutLibrosNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInputObjectSchema).optional(),
			categoria: z.lazy(() => CategoriaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema).optional(),
		})
		.strict();
export const LibroCategoriaUpdateWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpdateWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateWithoutLibroInput>;
export const LibroCategoriaUpdateWithoutLibroInputObjectZodSchema = makeSchema();
