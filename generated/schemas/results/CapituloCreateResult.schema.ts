import * as z from "zod";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { LibroSchema } from "../models/Libro.schema.ts";
import { NotaAutorSchema } from "../models/NotaAutor.schema.ts";
import { ParrafoSchema } from "../models/Parrafo.schema.ts";
export const CapituloCreateResultSchema = z.object({
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
});
