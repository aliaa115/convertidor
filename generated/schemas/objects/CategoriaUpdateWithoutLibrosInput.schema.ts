import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutCategoriasNestedInput.schema.ts";
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
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema).optional(),
		})
		.strict();
export const CategoriaUpdateWithoutLibrosInputObjectSchema: z.ZodType<Prisma.CategoriaUpdateWithoutLibrosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaUpdateWithoutLibrosInput>;
export const CategoriaUpdateWithoutLibrosInputObjectZodSchema = makeSchema();
