import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EstadoUpdateOneRequiredWithoutConfiguracionesNestedInputObjectSchema as EstadoUpdateOneRequiredWithoutConfiguracionesNestedInputObjectSchema } from "./EstadoUpdateOneRequiredWithoutConfiguracionesNestedInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";
import { UsuarioUpdateOneWithoutConfiguracionNestedInputObjectSchema as UsuarioUpdateOneWithoutConfiguracionNestedInputObjectSchema } from "./UsuarioUpdateOneWithoutConfiguracionNestedInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			valor: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			usuario: z.lazy(() => UsuarioUpdateOneWithoutConfiguracionNestedInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoUpdateOneRequiredWithoutConfiguracionesNestedInputObjectSchema).optional(),
		})
		.strict();
export const ConfiguracionUpdateWithoutTipoInputObjectSchema: z.ZodType<Prisma.ConfiguracionUpdateWithoutTipoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUpdateWithoutTipoInput>;
export const ConfiguracionUpdateWithoutTipoInputObjectZodSchema = makeSchema();
