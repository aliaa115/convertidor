import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutCategoriasNestedInput.schema.ts";
import { LibroCategoriaUpdateManyWithoutCategoriaNestedInputObjectSchema as LibroCategoriaUpdateManyWithoutCategoriaNestedInputObjectSchema } from "./LibroCategoriaUpdateManyWithoutCategoriaNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
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
			estado: z
				.lazy(
					() => EstadoUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema,
				)
				.optional(),
			libros: z
				.lazy(
					() => LibroCategoriaUpdateManyWithoutCategoriaNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const CategoriaUpdateInputObjectSchema: z.ZodType<Prisma.CategoriaUpdateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaUpdateInput>;
export const CategoriaUpdateInputObjectZodSchema = makeSchema();
