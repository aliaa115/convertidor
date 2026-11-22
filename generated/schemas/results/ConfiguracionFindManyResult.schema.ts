import * as z from "zod";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { TipoSchema } from "../models/Tipo.schema.ts";
import { UsuarioSchema } from "../models/Usuario.schema.ts";
export const ConfiguracionFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			valor: z.string().optional(),
			createdAt: z.date(),
			updatedAt: z.date(),
			usuarioId: z.number().int().optional(),
			usuario: UsuarioSchema.optional(),
			tipoId: z.number().int().optional(),
			tipo: TipoSchema.optional(),
			estadoId: z.number().int(),
			estado: EstadoSchema.optional(),
		}),
	),
	pagination: z.object({
		page: z.number().int().min(1),
		pageSize: z.number().int().min(1),
		total: z.number().int().min(0),
		totalPages: z.number().int().min(0),
		hasNext: z.boolean(),
		hasPrev: z.boolean(),
	}),
});
