import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema as EscritorUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema } from "./EscritorUpdateOneRequiredWithoutGlosariosNestedInput.schema.ts";
import { LibroUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema as LibroUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema } from "./LibroUpdateOneRequiredWithoutGlosariosNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			palabra: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			significado: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			libro: z.lazy(() => LibroUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema).optional(),
			escritor: z.lazy(() => EscritorUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema).optional(),
		})
		.strict();
export const GlosarioUpdateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.GlosarioUpdateWithoutEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpdateWithoutEstadoInput>;
export const GlosarioUpdateWithoutEstadoInputObjectZodSchema = makeSchema();
