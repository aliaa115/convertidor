import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { LibroEtiquetaUpdateManyWithoutEtiquetaNestedInputObjectSchema as LibroEtiquetaUpdateManyWithoutEtiquetaNestedInputObjectSchema } from "./LibroEtiquetaUpdateManyWithoutEtiquetaNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z
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
			libros: z
				.lazy(
					() => LibroEtiquetaUpdateManyWithoutEtiquetaNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const EtiquetaUpdateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.EtiquetaUpdateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaUpdateWithoutEstadoInput>;
export const EtiquetaUpdateWithoutEstadoInputObjectZodSchema = makeSchema();
