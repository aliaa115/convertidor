import * as z from "zod";
import { CapituloSchema } from "../models/Capitulo.schema.ts";
import { ComentarioSchema } from "../models/Comentario.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { MarcadorSchema } from "../models/Marcador.schema.ts";
export const ParrafoFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			contenido: z.string().optional(),
			indice: z.number().int().optional(),
			createdAt: z.date(),
			updatedAt: z.date(),
			capituloId: z.number().int(),
			capitulo: CapituloSchema.optional(),
			estadoId: z.number().int(),
			estado: EstadoSchema.optional(),
			comentarios: z.array(ComentarioSchema).optional(),
			marcadores: z.array(MarcadorSchema).optional(),
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
