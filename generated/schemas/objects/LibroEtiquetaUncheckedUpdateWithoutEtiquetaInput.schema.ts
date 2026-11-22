import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			estadoId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
		})
		.strict();
export const LibroEtiquetaUncheckedUpdateWithoutEtiquetaInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUncheckedUpdateWithoutEtiquetaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUncheckedUpdateWithoutEtiquetaInput>;
export const LibroEtiquetaUncheckedUpdateWithoutEtiquetaInputObjectZodSchema = makeSchema();
