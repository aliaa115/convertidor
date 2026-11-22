import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioUpdateManyWithoutPadreNestedInputObjectSchema as ComentarioUpdateManyWithoutPadreNestedInputObjectSchema } from "./ComentarioUpdateManyWithoutPadreNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateOneRequiredWithoutComentariosNestedInputObjectSchema as EscritorUpdateOneRequiredWithoutComentariosNestedInputObjectSchema } from "./EscritorUpdateOneRequiredWithoutComentariosNestedInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutComentariosNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutComentariosNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutComentariosNestedInput.schema.ts";
import { ParrafoUpdateOneRequiredWithoutComentariosNestedInputObjectSchema as ParrafoUpdateOneRequiredWithoutComentariosNestedInputObjectSchema } from "./ParrafoUpdateOneRequiredWithoutComentariosNestedInput.schema.ts";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.ts";
import { TipoUpdateOneWithoutComentariosNestedInputObjectSchema as TipoUpdateOneWithoutComentariosNestedInputObjectSchema } from "./TipoUpdateOneWithoutComentariosNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			contenido: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			escritor: z.lazy(() => EscritorUpdateOneRequiredWithoutComentariosNestedInputObjectSchema).optional(),
			parrafo: z.lazy(() => ParrafoUpdateOneRequiredWithoutComentariosNestedInputObjectSchema).optional(),
			respuestas: z.lazy(() => ComentarioUpdateManyWithoutPadreNestedInputObjectSchema).optional(),
			tipo: z.lazy(() => TipoUpdateOneWithoutComentariosNestedInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutComentariosNestedInputObjectSchema).optional(),
		})
		.strict();
export const ComentarioUpdateWithoutPadreInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateWithoutPadreInput> = makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateWithoutPadreInput>;
export const ComentarioUpdateWithoutPadreInputObjectZodSchema = makeSchema();
