import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EntidadTipoSchema } from "../enums/EntidadTipo.schema.ts";
import { NotificacionTipoSchema } from "../enums/NotificacionTipo.schema.ts";
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EnumEntidadTipoFieldUpdateOperationsInputObjectSchema as EnumEntidadTipoFieldUpdateOperationsInputObjectSchema } from "./EnumEntidadTipoFieldUpdateOperationsInput.schema.ts";
import { EnumNotificacionTipoFieldUpdateOperationsInputObjectSchema as EnumNotificacionTipoFieldUpdateOperationsInputObjectSchema } from "./EnumNotificacionTipoFieldUpdateOperationsInput.schema.ts";
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from "./NullableIntFieldUpdateOperationsInput.schema.ts";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema.ts";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			titulo: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			mensaje: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			tipo: z.union([NotificacionTipoSchema, z.lazy(() => EnumNotificacionTipoFieldUpdateOperationsInputObjectSchema)]).optional(),
			leida: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
			entidadId: z
				.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
				.optional()
				.nullable(),
			entidadTipo: z.union([EntidadTipoSchema, z.lazy(() => EnumEntidadTipoFieldUpdateOperationsInputObjectSchema)]).optional(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
		})
		.strict();
export const NotificacionUpdateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.NotificacionUpdateWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionUpdateWithoutUsuarioInput>;
export const NotificacionUpdateWithoutUsuarioInputObjectZodSchema = makeSchema();
