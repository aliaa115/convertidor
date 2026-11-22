import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotificacionTipoSchema } from "../enums/NotificacionTipo.schema.ts";

const makeSchema = () =>
	z
		.object({
			set: NotificacionTipoSchema.optional(),
		})
		.strict();
export const EnumNotificacionTipoFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumNotificacionTipoFieldUpdateOperationsInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EnumNotificacionTipoFieldUpdateOperationsInput>;
export const EnumNotificacionTipoFieldUpdateOperationsInputObjectZodSchema =
	makeSchema();
