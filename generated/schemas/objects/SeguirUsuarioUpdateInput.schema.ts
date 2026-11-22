import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateOneRequiredWithoutSeguidoresNestedInputObjectSchema as EscritorUpdateOneRequiredWithoutSeguidoresNestedInputObjectSchema } from "./EscritorUpdateOneRequiredWithoutSeguidoresNestedInput.schema.ts";
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
export const SeguirUsuarioUpdateInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUpdateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUpdateInput>;
export const SeguirUsuarioUpdateInputObjectZodSchema = makeSchema();
