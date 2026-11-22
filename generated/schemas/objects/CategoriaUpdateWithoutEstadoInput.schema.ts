import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { LibroCategoriaUpdateManyWithoutCategoriaNestedInputObjectSchema as LibroCategoriaUpdateManyWithoutCategoriaNestedInputObjectSchema } from "./LibroCategoriaUpdateManyWithoutCategoriaNestedInput.schema.ts";
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
			libros: z.lazy(() => LibroCategoriaUpdateManyWithoutCategoriaNestedInputObjectSchema).optional(),
		})
		.strict();
export const CategoriaUpdateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CategoriaUpdateWithoutEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaUpdateWithoutEstadoInput>;
export const CategoriaUpdateWithoutEstadoInputObjectZodSchema = makeSchema();
