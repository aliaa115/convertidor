import * as z from "zod";
import { EscritorSchema } from "../models/Escritor.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { LibroSchema } from "../models/Libro.schema.ts";
export const GlosarioFindFirstResultSchema = z.nullable(
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
);
