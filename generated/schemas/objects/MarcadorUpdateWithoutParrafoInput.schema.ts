import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateOneRequiredWithoutMarcadoresNestedInputObjectSchema as EscritorUpdateOneRequiredWithoutMarcadoresNestedInputObjectSchema } from "./EscritorUpdateOneRequiredWithoutMarcadoresNestedInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutMarcadoresNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutMarcadoresNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutMarcadoresNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

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
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutMarcadoresNestedInputObjectSchema).optional(),
		})
		.strict();
export const MarcadorUpdateWithoutParrafoInputObjectSchema: z.ZodType<Prisma.MarcadorUpdateWithoutParrafoInput> = makeSchema() as unknown as z.ZodType<Prisma.MarcadorUpdateWithoutParrafoInput>;
export const MarcadorUpdateWithoutParrafoInputObjectZodSchema = makeSchema();
