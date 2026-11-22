import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";
import { NotaAutorUncheckedUpdateManyWithoutCapituloNestedInputObjectSchema as NotaAutorUncheckedUpdateManyWithoutCapituloNestedInputObjectSchema } from "./NotaAutorUncheckedUpdateManyWithoutCapituloNestedInput.schema.ts";
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from "./NullableIntFieldUpdateOperationsInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";
import { ParrafoUncheckedUpdateManyWithoutCapituloNestedInputObjectSchema as ParrafoUncheckedUpdateManyWithoutCapituloNestedInputObjectSchema } from "./ParrafoUncheckedUpdateManyWithoutCapituloNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
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
			libroId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			estadoId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			parrafos: z.lazy(() => ParrafoUncheckedUpdateManyWithoutCapituloNestedInputObjectSchema).optional(),
			notasAutor: z.lazy(() => NotaAutorUncheckedUpdateManyWithoutCapituloNestedInputObjectSchema).optional(),
		})
		.strict();
export const CapituloUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CapituloUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CapituloUncheckedUpdateInput>;
export const CapituloUncheckedUpdateInputObjectZodSchema = makeSchema();
