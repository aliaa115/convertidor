import * as z from "zod";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { LibroEtiquetaSchema } from "../models/LibroEtiqueta.schema.ts";
export const EtiquetaFindFirstResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		nombre: z.string().optional(),
		createdAt: z.date(),
		updatedAt: z.date(),
		estadoId: z.number().int(),
		estado: EstadoSchema.optional(),
		libros: z.array(LibroEtiquetaSchema).optional(),
	}),
);
