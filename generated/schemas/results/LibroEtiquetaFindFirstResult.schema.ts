import * as z from "zod";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { EtiquetaSchema } from "../models/Etiqueta.schema.ts";
import { LibroSchema } from "../models/Libro.schema.ts";
export const LibroEtiquetaFindFirstResultSchema = z.nullable(
	z.object({
		libroId: z.number().int(),
		etiquetaId: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		estadoId: z.number().int(),
		estado: EstadoSchema.optional(),
		libro: LibroSchema.optional(),
		etiqueta: EtiquetaSchema.optional(),
	}),
);
