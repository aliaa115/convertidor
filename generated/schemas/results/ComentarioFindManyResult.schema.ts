import * as z from "zod";
import { EscritorSchema } from "../models/Escritor.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { ParrafoSchema } from "../models/Parrafo.schema.ts";
import { TipoSchema } from "../models/Tipo.schema.ts";
export const ComentarioFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			contenido: z.string(),
			createdAt: z.date(),
			updatedAt: z.date(),
			escritorId: z.number().int(),
			escritor: EscritorSchema.optional(),
			parrafoId: z.number().int(),
			parrafo: ParrafoSchema.optional(),
			comentarioPadreId: z.number().int().optional(),
			padre: z.unknown().optional(),
			respuestas: z.array(z.unknown()).optional(),
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
