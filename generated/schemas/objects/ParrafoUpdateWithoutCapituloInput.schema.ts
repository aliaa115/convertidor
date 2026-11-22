import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioUpdateManyWithoutParrafoNestedInputObjectSchema as ComentarioUpdateManyWithoutParrafoNestedInputObjectSchema } from "./ComentarioUpdateManyWithoutParrafoNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutParrafosNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutParrafosNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutParrafosNestedInput.schema.ts";
import { MarcadorUpdateManyWithoutParrafoNestedInputObjectSchema as MarcadorUpdateManyWithoutParrafoNestedInputObjectSchema } from "./MarcadorUpdateManyWithoutParrafoNestedInput.schema.ts";
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from "./NullableIntFieldUpdateOperationsInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			contenido: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			indice: z
				.union([
					z.number().int(),
					z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			createdAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			updatedAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			estado: z
				.lazy(
					() => EstadoUpdateOneRequiredWithoutParrafosNestedInputObjectSchema,
				)
				.optional(),
			comentarios: z
				.lazy(() => ComentarioUpdateManyWithoutParrafoNestedInputObjectSchema)
				.optional(),
			marcadores: z
				.lazy(() => MarcadorUpdateManyWithoutParrafoNestedInputObjectSchema)
				.optional(),
		})
		.strict();
export const ParrafoUpdateWithoutCapituloInputObjectSchema: z.ZodType<Prisma.ParrafoUpdateWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpdateWithoutCapituloInput>;
export const ParrafoUpdateWithoutCapituloInputObjectZodSchema = makeSchema();
