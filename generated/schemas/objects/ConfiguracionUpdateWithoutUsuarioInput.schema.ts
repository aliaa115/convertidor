import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutConfiguracionesNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutConfiguracionesNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutConfiguracionesNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";
import { TipoUpdateOneWithoutConfiguracionesNestedInputObjectSchema as TipoUpdateOneWithoutConfiguracionesNestedInputObjectSchema } from "./TipoUpdateOneWithoutConfiguracionesNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			valor: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			tipo: z.lazy(() => TipoUpdateOneWithoutConfiguracionesNestedInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutConfiguracionesNestedInputObjectSchema).optional(),
		})
		.strict();
export const ConfiguracionUpdateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ConfiguracionUpdateWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUpdateWithoutUsuarioInput>;
export const ConfiguracionUpdateWithoutUsuarioInputObjectZodSchema = makeSchema();
