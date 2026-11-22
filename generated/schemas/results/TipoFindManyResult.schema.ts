import * as z from "zod";
import { ComentarioSchema } from "../models/Comentario.schema.ts";
import { ConfiguracionSchema } from "../models/Configuracion.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { LibroSchema } from "../models/Libro.schema.ts";
export const TipoFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			nombre: z.string().optional(),
			tabla: z.string().optional(),
			estadoId: z.number().int(),
			estado: EstadoSchema.optional(),
			configuraciones: z.array(ConfiguracionSchema).optional(),
			libros: z.array(LibroSchema).optional(),
			comentarios: z.array(ComentarioSchema).optional(),
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
