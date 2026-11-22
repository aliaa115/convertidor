import * as z from "zod";
import { EscritorSchema } from "../models/Escritor.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { LibroSchema } from "../models/Libro.schema.ts";
export const FavoritoFindFirstResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int().optional(),
		escritor: EscritorSchema.optional(),
		libroId: z.number().int().optional(),
		libro: LibroSchema.optional(),
		estadoId: z.number().int(),
		estado: EstadoSchema.optional(),
	}),
);
