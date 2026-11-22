import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionUpdateOneWithoutUsuarioNestedInputObjectSchema as ConfiguracionUpdateOneWithoutUsuarioNestedInputObjectSchema } from "./ConfiguracionUpdateOneWithoutUsuarioNestedInput.schema.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.ts";
import { EscritorUpdateOneWithoutUsuarioNestedInputObjectSchema as EscritorUpdateOneWithoutUsuarioNestedInputObjectSchema } from "./EscritorUpdateOneWithoutUsuarioNestedInput.schema.ts";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema.ts";
import { ListaUpdateManyWithoutUsuarioNestedInputObjectSchema as ListaUpdateManyWithoutUsuarioNestedInputObjectSchema } from "./ListaUpdateManyWithoutUsuarioNestedInput.schema.ts";
import { NotificacionUpdateManyWithoutUsuarioNestedInputObjectSchema as NotificacionUpdateManyWithoutUsuarioNestedInputObjectSchema } from "./NotificacionUpdateManyWithoutUsuarioNestedInput.schema.ts";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			userName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
			nivel: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
			createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
			configuracion: z.lazy(() => ConfiguracionUpdateOneWithoutUsuarioNestedInputObjectSchema).optional(),
			escritor: z.lazy(() => EscritorUpdateOneWithoutUsuarioNestedInputObjectSchema).optional(),
			listas: z.lazy(() => ListaUpdateManyWithoutUsuarioNestedInputObjectSchema).optional(),
			notificacions: z.lazy(() => NotificacionUpdateManyWithoutUsuarioNestedInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioUpdateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateWithoutEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateWithoutEstadoInput>;
export const UsuarioUpdateWithoutEstadoInputObjectZodSchema = makeSchema();
