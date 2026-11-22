import * as z from "zod";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { ListaLibroSchema } from "../models/ListaLibro.schema.ts";
import { UsuarioSchema } from "../models/Usuario.schema.ts";
export const ListaFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			nombre: z.string().optional(),
			privada: z.boolean(),
			createdAt: z.date(),
			updatedAt: z.date(),
			usuarioId: z.number().int().optional(),
			usuario: UsuarioSchema.optional(),
			estadoId: z.number().int(),
			estado: EstadoSchema.optional(),
			libros: z.array(ListaLibroSchema).optional(),
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
