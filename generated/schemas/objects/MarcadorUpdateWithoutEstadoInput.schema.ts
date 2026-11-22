import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateOneRequiredWithoutMarcadoresNestedInputObjectSchema as EscritorUpdateOneRequiredWithoutMarcadoresNestedInputObjectSchema } from "./EscritorUpdateOneRequiredWithoutMarcadoresNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";
import { ParrafoUpdateOneRequiredWithoutMarcadoresNestedInputObjectSchema as ParrafoUpdateOneRequiredWithoutMarcadoresNestedInputObjectSchema } from "./ParrafoUpdateOneRequiredWithoutMarcadoresNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			color: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			escritor: z.lazy(() => EscritorUpdateOneRequiredWithoutMarcadoresNestedInputObjectSchema).optional(),
			parrafo: z.lazy(() => ParrafoUpdateOneRequiredWithoutMarcadoresNestedInputObjectSchema).optional(),
		})
		.strict();
export const MarcadorUpdateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.MarcadorUpdateWithoutEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.MarcadorUpdateWithoutEstadoInput>;
export const MarcadorUpdateWithoutEstadoInputObjectZodSchema = makeSchema();
