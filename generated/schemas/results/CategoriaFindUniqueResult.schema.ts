import * as z from "zod";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { LibroCategoriaSchema } from "../models/LibroCategoria.schema.ts";
export const CategoriaFindUniqueResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		nombre: z.string().optional(),
		createdAt: z.date(),
		updatedAt: z.date(),
		estadoId: z.number().int(),
		estado: EstadoSchema.optional(),
		libros: z.array(LibroCategoriaSchema).optional(),
	}),
);
