import * as z from "zod";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { LibroCategoriaSchema } from "../models/LibroCategoria.schema.ts";
export const CategoriaFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			nombre: z.string().optional(),
			createdAt: z.date(),
			updatedAt: z.date(),
			estadoId: z.number().int(),
			estado: EstadoSchema.optional(),
			libros: z.array(LibroCategoriaSchema).optional(),
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
