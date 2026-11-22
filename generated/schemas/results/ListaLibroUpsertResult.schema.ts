import * as z from "zod";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { LibroSchema } from "../models/Libro.schema.ts";
import { ListaSchema } from "../models/Lista.schema.ts";
export const ListaLibroUpsertResultSchema = z.object({
	id: z.number().int(),
	createdAt: z.date(),
	updatedAt: z.date(),
	listaId: z.number().int().optional(),
	lista: ListaSchema.optional(),
	libroId: z.number().int().optional(),
	libro: LibroSchema.optional(),
	estadoId: z.number().int(),
	estado: EstadoSchema.optional(),
});
