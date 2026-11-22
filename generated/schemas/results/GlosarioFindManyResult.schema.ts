import * as z from "zod";
import { EscritorSchema } from "../models/Escritor.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { LibroSchema } from "../models/Libro.schema.ts";
export const GlosarioFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			palabra: z.string().optional(),
			significado: z.string().optional(),
			createdAt: z.date(),
			updatedAt: z.date(),
			libroId: z.number().int(),
			libro: LibroSchema.optional(),
			escritorId: z.number().int(),
			escritor: EscritorSchema.optional(),
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
