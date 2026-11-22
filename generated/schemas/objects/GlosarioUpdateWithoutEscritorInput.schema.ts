import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutGlosariosNestedInput.schema.ts";
import { LibroUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema as LibroUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema } from "./LibroUpdateOneRequiredWithoutGlosariosNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			palabra: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			significado: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
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
			libro: z
				.lazy(
					() => LibroUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema,
				)
				.optional(),
			estado: z
				.lazy(
					() => EstadoUpdateOneRequiredWithoutGlosariosNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const GlosarioUpdateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.GlosarioUpdateWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpdateWithoutEscritorInput>;
export const GlosarioUpdateWithoutEscritorInputObjectZodSchema = makeSchema();
