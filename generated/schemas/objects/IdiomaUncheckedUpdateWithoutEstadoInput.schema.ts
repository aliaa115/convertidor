import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";
import { LibroUncheckedUpdateManyWithoutIdiomaNestedInputObjectSchema as LibroUncheckedUpdateManyWithoutIdiomaNestedInputObjectSchema } from "./LibroUncheckedUpdateManyWithoutIdiomaNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z
				.union([
					z.number().int(),
					z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			nombre: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			siglas: z
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
					() => LibroUncheckedUpdateManyWithoutIdiomaNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const IdiomaUncheckedUpdateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.IdiomaUncheckedUpdateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaUncheckedUpdateWithoutEstadoInput>;
export const IdiomaUncheckedUpdateWithoutEstadoInputObjectZodSchema =
	makeSchema();
