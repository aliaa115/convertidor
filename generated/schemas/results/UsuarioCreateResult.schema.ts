import * as z from "zod";
import { ConfiguracionSchema } from "../models/Configuracion.schema.ts";
import { EscritorSchema } from "../models/Escritor.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { ListaSchema } from "../models/Lista.schema.ts";
import { NotificacionSchema } from "../models/Notificacion.schema.ts";
export const UsuarioCreateResultSchema = z.object({
	id: z.number().int(),
	userName: z.string(),
	email: z.string(),
	password: z.string(),
	nivel: z.number().int(),
	createdAt: z.date(),
	updatedAt: z.date(),
	estadoId: z.number().int(),
	estado: EstadoSchema.optional(),
	configuracion: ConfiguracionSchema.optional(),
	escritor: EscritorSchema.optional(),
	listas: z.array(ListaSchema).optional(),
	notificacions: z.array(NotificacionSchema).optional(),
});
