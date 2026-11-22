import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioUncheckedUpdateManyWithoutParrafoNestedInputObjectSchema as ComentarioUncheckedUpdateManyWithoutParrafoNestedInputObjectSchema } from "./ComentarioUncheckedUpdateManyWithoutParrafoNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";
import { MarcadorUncheckedUpdateManyWithoutParrafoNestedInputObjectSchema as MarcadorUncheckedUpdateManyWithoutParrafoNestedInputObjectSchema } from "./MarcadorUncheckedUpdateManyWithoutParrafoNestedInput.schema.ts";
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from "./NullableIntFieldUpdateOperationsInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			contenido: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			indice: z
				.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			estadoId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			comentarios: z.lazy(() => ComentarioUncheckedUpdateManyWithoutParrafoNestedInputObjectSchema).optional(),
			marcadores: z.lazy(() => MarcadorUncheckedUpdateManyWithoutParrafoNestedInputObjectSchema).optional(),
		})
		.strict();
export const ParrafoUncheckedUpdateWithoutCapituloInputObjectSchema: z.ZodType<Prisma.ParrafoUncheckedUpdateWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUncheckedUpdateWithoutCapituloInput>;
export const ParrafoUncheckedUpdateWithoutCapituloInputObjectZodSchema = makeSchema();
