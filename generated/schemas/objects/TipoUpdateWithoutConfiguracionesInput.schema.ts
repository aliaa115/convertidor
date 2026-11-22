import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioUpdateManyWithoutTipoNestedInputObjectSchema as ComentarioUpdateManyWithoutTipoNestedInputObjectSchema } from "./ComentarioUpdateManyWithoutTipoNestedInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutTiposNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutTiposNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutTiposNestedInput.schema.ts";
import { LibroUpdateManyWithoutTipoNestedInputObjectSchema as LibroUpdateManyWithoutTipoNestedInputObjectSchema } from "./LibroUpdateManyWithoutTipoNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			tabla: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutTiposNestedInputObjectSchema).optional(),
			libros: z.lazy(() => LibroUpdateManyWithoutTipoNestedInputObjectSchema).optional(),
			comentarios: z.lazy(() => ComentarioUpdateManyWithoutTipoNestedInputObjectSchema).optional(),
		})
		.strict();
export const TipoUpdateWithoutConfiguracionesInputObjectSchema: z.ZodType<Prisma.TipoUpdateWithoutConfiguracionesInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUpdateWithoutConfiguracionesInput>;
export const TipoUpdateWithoutConfiguracionesInputObjectZodSchema = makeSchema();
