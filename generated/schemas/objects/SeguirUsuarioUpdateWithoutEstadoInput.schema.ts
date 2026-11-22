import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateOneRequiredWithoutSeguidoresNestedInputObjectSchema as EscritorUpdateOneRequiredWithoutSeguidoresNestedInputObjectSchema } from "./EscritorUpdateOneRequiredWithoutSeguidoresNestedInput.schema.ts";
import { EscritorUpdateOneRequiredWithoutSiguiendoNestedInputObjectSchema as EscritorUpdateOneRequiredWithoutSiguiendoNestedInputObjectSchema } from "./EscritorUpdateOneRequiredWithoutSiguiendoNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			escritor: z.lazy(() => EscritorUpdateOneRequiredWithoutSiguiendoNestedInputObjectSchema).optional(),
			seguido: z.lazy(() => EscritorUpdateOneRequiredWithoutSeguidoresNestedInputObjectSchema).optional(),
		})
		.strict();
export const SeguirUsuarioUpdateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUpdateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUpdateWithoutEstadoInput>;
export const SeguirUsuarioUpdateWithoutEstadoInputObjectZodSchema = makeSchema();
