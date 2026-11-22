import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateOneRequiredWithoutSeguidoresNestedInputObjectSchema as EscritorUpdateOneRequiredWithoutSeguidoresNestedInputObjectSchema } from "./EscritorUpdateOneRequiredWithoutSeguidoresNestedInput.schema.ts";
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
			seguido: z
				.lazy(
					() =>
						EscritorUpdateOneRequiredWithoutSeguidoresNestedInputObjectSchema,
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
export const SeguirUsuarioUpdateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUpdateWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUpdateWithoutEscritorInput>;
export const SeguirUsuarioUpdateWithoutEscritorInputObjectZodSchema =
	makeSchema();
