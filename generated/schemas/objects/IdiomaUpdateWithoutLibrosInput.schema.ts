import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutIdiomaNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutIdiomaNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutIdiomaNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			siglas: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutIdiomaNestedInputObjectSchema).optional(),
		})
		.strict();
export const IdiomaUpdateWithoutLibrosInputObjectSchema: z.ZodType<Prisma.IdiomaUpdateWithoutLibrosInput> = makeSchema() as unknown as z.ZodType<Prisma.IdiomaUpdateWithoutLibrosInput>;
export const IdiomaUpdateWithoutLibrosInputObjectZodSchema = makeSchema();
