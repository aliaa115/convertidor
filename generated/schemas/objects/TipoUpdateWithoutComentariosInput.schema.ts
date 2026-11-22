import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionUpdateManyWithoutTipoNestedInputObjectSchema as ConfiguracionUpdateManyWithoutTipoNestedInputObjectSchema } from "./ConfiguracionUpdateManyWithoutTipoNestedInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutTiposNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutTiposNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutTiposNestedInput.schema.ts";
import { LibroUpdateManyWithoutTipoNestedInputObjectSchema as LibroUpdateManyWithoutTipoNestedInputObjectSchema } from "./LibroUpdateManyWithoutTipoNestedInput.schema.ts";
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
			tabla: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
				])
				.optional()
				.nullable(),
			estado: z
				.lazy(() => EstadoUpdateOneRequiredWithoutTiposNestedInputObjectSchema)
				.optional(),
			configuraciones: z
				.lazy(() => ConfiguracionUpdateManyWithoutTipoNestedInputObjectSchema)
				.optional(),
			libros: z
				.lazy(() => LibroUpdateManyWithoutTipoNestedInputObjectSchema)
				.optional(),
		})
		.strict();
export const TipoUpdateWithoutComentariosInputObjectSchema: z.ZodType<Prisma.TipoUpdateWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUpdateWithoutComentariosInput>;
export const TipoUpdateWithoutComentariosInputObjectZodSchema = makeSchema();
