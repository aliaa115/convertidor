import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CategoriaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema as CategoriaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema } from "./CategoriaUpdateOneRequiredWithoutLibrosNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInput.schema.ts";
import { LibroUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema as LibroUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema } from "./LibroUpdateOneRequiredWithoutCategoriasNestedInput.schema.ts";

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
						EstadoUpdateOneRequiredWithoutLibroCategoriasNestedInputObjectSchema,
				)
				.optional(),
			libro: z
				.lazy(
					() => LibroUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema,
				)
				.optional(),
			categoria: z
				.lazy(
					() => CategoriaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const LibroCategoriaUpdateInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUpdateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateInput>;
export const LibroCategoriaUpdateInputObjectZodSchema = makeSchema();
