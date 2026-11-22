import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { LibroUpdateManyWithoutIdiomaNestedInputObjectSchema as LibroUpdateManyWithoutIdiomaNestedInputObjectSchema } from "./LibroUpdateManyWithoutIdiomaNestedInput.schema.ts";
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
				.lazy(() => LibroUpdateManyWithoutIdiomaNestedInputObjectSchema)
				.optional(),
		})
		.strict();
export const IdiomaUpdateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.IdiomaUpdateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaUpdateWithoutEstadoInput>;
export const IdiomaUpdateWithoutEstadoInputObjectZodSchema = makeSchema();
