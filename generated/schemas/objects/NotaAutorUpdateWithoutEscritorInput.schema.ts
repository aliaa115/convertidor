import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema as CapituloUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema } from "./CapituloUpdateOneRequiredWithoutNotasAutorNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutNotasAutorNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			texto: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			capitulo: z.lazy(() => CapituloUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema).optional(),
		})
		.strict();
export const NotaAutorUpdateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.NotaAutorUpdateWithoutEscritorInput> = makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUpdateWithoutEscritorInput>;
export const NotaAutorUpdateWithoutEscritorInputObjectZodSchema = makeSchema();
