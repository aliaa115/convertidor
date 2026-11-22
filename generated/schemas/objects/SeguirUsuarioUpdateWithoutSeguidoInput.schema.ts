import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateOneRequiredWithoutSiguiendoNestedInputObjectSchema as EscritorUpdateOneRequiredWithoutSiguiendoNestedInputObjectSchema } from "./EscritorUpdateOneRequiredWithoutSiguiendoNestedInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutSeguirUsuariosNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutSeguirUsuariosNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutSeguirUsuariosNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
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
			escritor: z
				.lazy(
					() =>
						EscritorUpdateOneRequiredWithoutSiguiendoNestedInputObjectSchema,
				)
				.optional(),
			estado: z
				.lazy(
					() =>
						EstadoUpdateOneRequiredWithoutSeguirUsuariosNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const SeguirUsuarioUpdateWithoutSeguidoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUpdateWithoutSeguidoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUpdateWithoutSeguidoInput>;
export const SeguirUsuarioUpdateWithoutSeguidoInputObjectZodSchema =
	makeSchema();
