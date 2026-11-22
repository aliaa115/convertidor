import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema as EscritorUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema } from "./EscritorUpdateOneRequiredWithoutGlosariosNestedInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutGlosariosNestedInput.schema.ts";
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
			escritor: z.lazy(() => EscritorUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema).optional(),
		})
		.strict();
export const GlosarioUpdateWithoutLibroInputObjectSchema: z.ZodType<Prisma.GlosarioUpdateWithoutLibroInput> = makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpdateWithoutLibroInput>;
export const GlosarioUpdateWithoutLibroInputObjectZodSchema = makeSchema();
