import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioUncheckedUpdateManyWithoutTipoNestedInputObjectSchema as ComentarioUncheckedUpdateManyWithoutTipoNestedInputObjectSchema } from "./ComentarioUncheckedUpdateManyWithoutTipoNestedInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";
import { LibroUncheckedUpdateManyWithoutTipoNestedInputObjectSchema as LibroUncheckedUpdateManyWithoutTipoNestedInputObjectSchema } from "./LibroUncheckedUpdateManyWithoutTipoNestedInput.schema.ts";
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
			tabla: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			estadoId: z
				.union([
					z.number().int(),
					z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			libros: z
				.lazy(() => LibroUncheckedUpdateManyWithoutTipoNestedInputObjectSchema)
				.optional(),
			comentarios: z
				.lazy(
					() => ComentarioUncheckedUpdateManyWithoutTipoNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const TipoUncheckedUpdateWithoutConfiguracionesInputObjectSchema: z.ZodType<Prisma.TipoUncheckedUpdateWithoutConfiguracionesInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUncheckedUpdateWithoutConfiguracionesInput>;
export const TipoUncheckedUpdateWithoutConfiguracionesInputObjectZodSchema =
	makeSchema();
