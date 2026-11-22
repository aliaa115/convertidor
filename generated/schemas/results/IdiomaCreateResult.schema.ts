import * as z from "zod";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { LibroSchema } from "../models/Libro.schema.ts";
export const IdiomaCreateResultSchema = z.object({
	id: z.number().int(),
	nombre: z.string().optional(),
	siglas: z.string().optional(),
	createdAt: z.date(),
	updatedAt: z.date(),
	estadoId: z.number().int(),
	estado: EstadoSchema.optional(),
	libros: z.array(LibroSchema).optional(),
});
