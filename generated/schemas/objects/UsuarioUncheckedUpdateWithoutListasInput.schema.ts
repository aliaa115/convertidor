import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionUncheckedUpdateOneWithoutUsuarioNestedInputObjectSchema as ConfiguracionUncheckedUpdateOneWithoutUsuarioNestedInputObjectSchema } from "./ConfiguracionUncheckedUpdateOneWithoutUsuarioNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUncheckedUpdateOneWithoutUsuarioNestedInputObjectSchema as EscritorUncheckedUpdateOneWithoutUsuarioNestedInputObjectSchema } from "./EscritorUncheckedUpdateOneWithoutUsuarioNestedInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";
import { NotificacionUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema as NotificacionUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema } from "./NotificacionUncheckedUpdateManyWithoutUsuarioNestedInput.schema.ts";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			userName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			nivel: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			estadoId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			configuracion: z.lazy(() => ConfiguracionUncheckedUpdateOneWithoutUsuarioNestedInputObjectSchema).optional(),
			escritor: z.lazy(() => EscritorUncheckedUpdateOneWithoutUsuarioNestedInputObjectSchema).optional(),
			notificacions: z.lazy(() => NotificacionUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioUncheckedUpdateWithoutListasInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedUpdateWithoutListasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedUpdateWithoutListasInput>;
export const UsuarioUncheckedUpdateWithoutListasInputObjectZodSchema = makeSchema();
