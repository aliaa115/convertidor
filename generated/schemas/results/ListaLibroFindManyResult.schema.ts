import * as z from "zod";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { LibroSchema } from "../models/Libro.schema.ts";
import { ListaSchema } from "../models/Lista.schema.ts";
export const ListaLibroFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			createdAt: z.date(),
			updatedAt: z.date(),
			listaId: z.number().int().optional(),
			lista: ListaSchema.optional(),
			libroId: z.number().int().optional(),
			libro: LibroSchema.optional(),
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
