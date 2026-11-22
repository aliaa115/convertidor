import * as z from "zod";
import { CategoriaSchema } from "../models/Categoria.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { LibroSchema } from "../models/Libro.schema.ts";
export const LibroCategoriaUpsertResultSchema = z.object({
	libroId: z.number().int(),
	categoriaId: z.number().int(),
	createdAt: z.date(),
	updatedAt: z.date(),
	estadoId: z.number().int(),
	estado: EstadoSchema.optional(),
	libro: LibroSchema.optional(),
	categoria: CategoriaSchema.optional(),
});
