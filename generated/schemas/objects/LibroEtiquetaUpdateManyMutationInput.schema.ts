import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
		})
		.strict();
export const LibroEtiquetaUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUpdateManyMutationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateManyMutationInput>;
export const LibroEtiquetaUpdateManyMutationInputObjectZodSchema = makeSchema();
