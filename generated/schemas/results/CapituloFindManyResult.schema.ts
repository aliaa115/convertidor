import * as z from "zod";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { LibroSchema } from "../models/Libro.schema.ts";
import { NotaAutorSchema } from "../models/NotaAutor.schema.ts";
import { ParrafoSchema } from "../models/Parrafo.schema.ts";
export const CapituloFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			nombre: z.string().optional(),
			indice: z.number().int().optional(),
			createdAt: z.date(),
			updatedAt: z.date(),
			libroId: z.number().int(),
			libro: LibroSchema.optional(),
			estadoId: z.number().int(),
			estado: EstadoSchema.optional(),
			parrafos: z.array(ParrafoSchema).optional(),
			notasAutor: z.array(NotaAutorSchema).optional(),
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
