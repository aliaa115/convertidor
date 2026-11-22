import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			categoriaId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
		})
		.strict();
export const LibroCategoriaUncheckedUpdateManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroCategoriaUncheckedUpdateManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaUncheckedUpdateManyWithoutEstadoInput>;
export const LibroCategoriaUncheckedUpdateManyWithoutEstadoInputObjectZodSchema = makeSchema();
