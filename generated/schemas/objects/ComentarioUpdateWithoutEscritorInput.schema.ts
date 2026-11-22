import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioUpdateManyWithoutPadreNestedInputObjectSchema as ComentarioUpdateManyWithoutPadreNestedInputObjectSchema } from "./ComentarioUpdateManyWithoutPadreNestedInput.schema.ts";
import { ComentarioUpdateOneWithoutRespuestasNestedInputObjectSchema as ComentarioUpdateOneWithoutRespuestasNestedInputObjectSchema } from "./ComentarioUpdateOneWithoutRespuestasNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutComentariosNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutComentariosNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutComentariosNestedInput.schema.ts";
import { ParrafoUpdateOneRequiredWithoutComentariosNestedInputObjectSchema as ParrafoUpdateOneRequiredWithoutComentariosNestedInputObjectSchema } from "./ParrafoUpdateOneRequiredWithoutComentariosNestedInput.schema.ts";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.ts";
import { TipoUpdateOneWithoutComentariosNestedInputObjectSchema as TipoUpdateOneWithoutComentariosNestedInputObjectSchema } from "./TipoUpdateOneWithoutComentariosNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			contenido: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
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
			parrafo: z
				.lazy(
					() =>
						ParrafoUpdateOneRequiredWithoutComentariosNestedInputObjectSchema,
				)
				.optional(),
			padre: z
				.lazy(() => ComentarioUpdateOneWithoutRespuestasNestedInputObjectSchema)
				.optional(),
			respuestas: z
				.lazy(() => ComentarioUpdateManyWithoutPadreNestedInputObjectSchema)
				.optional(),
			tipo: z
				.lazy(() => TipoUpdateOneWithoutComentariosNestedInputObjectSchema)
				.optional(),
			estado: z
				.lazy(
					() =>
						EstadoUpdateOneRequiredWithoutComentariosNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const ComentarioUpdateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateWithoutEscritorInput>;
export const ComentarioUpdateWithoutEscritorInputObjectZodSchema = makeSchema();
