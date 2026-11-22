import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { LibroUpdateOneRequiredWithoutCapitulosNestedInputObjectSchema as LibroUpdateOneRequiredWithoutCapitulosNestedInputObjectSchema } from "./LibroUpdateOneRequiredWithoutCapitulosNestedInput.schema.ts";
import { NotaAutorUpdateManyWithoutCapituloNestedInputObjectSchema as NotaAutorUpdateManyWithoutCapituloNestedInputObjectSchema } from "./NotaAutorUpdateManyWithoutCapituloNestedInput.schema.ts";
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from "./NullableIntFieldUpdateOperationsInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";
import { ParrafoUpdateManyWithoutCapituloNestedInputObjectSchema as ParrafoUpdateManyWithoutCapituloNestedInputObjectSchema } from "./ParrafoUpdateManyWithoutCapituloNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			indice: z
				.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			libro: z.lazy(() => LibroUpdateOneRequiredWithoutCapitulosNestedInputObjectSchema).optional(),
			parrafos: z.lazy(() => ParrafoUpdateManyWithoutCapituloNestedInputObjectSchema).optional(),
			notasAutor: z.lazy(() => NotaAutorUpdateManyWithoutCapituloNestedInputObjectSchema).optional(),
		})
		.strict();
export const CapituloUpdateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CapituloUpdateWithoutEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.CapituloUpdateWithoutEstadoInput>;
export const CapituloUpdateWithoutEstadoInputObjectZodSchema = makeSchema();
