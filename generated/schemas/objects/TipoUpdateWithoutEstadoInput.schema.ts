import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioUpdateManyWithoutTipoNestedInputObjectSchema as ComentarioUpdateManyWithoutTipoNestedInputObjectSchema } from "./ComentarioUpdateManyWithoutTipoNestedInput.schema.ts";
import { ConfiguracionUpdateManyWithoutTipoNestedInputObjectSchema as ConfiguracionUpdateManyWithoutTipoNestedInputObjectSchema } from "./ConfiguracionUpdateManyWithoutTipoNestedInput.schema.ts";
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
			configuraciones: z.lazy(() => ConfiguracionUpdateManyWithoutTipoNestedInputObjectSchema).optional(),
			libros: z.lazy(() => LibroUpdateManyWithoutTipoNestedInputObjectSchema).optional(),
			comentarios: z.lazy(() => ComentarioUpdateManyWithoutTipoNestedInputObjectSchema).optional(),
		})
		.strict();
export const TipoUpdateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.TipoUpdateWithoutEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.TipoUpdateWithoutEstadoInput>;
export const TipoUpdateWithoutEstadoInputObjectZodSchema = makeSchema();
