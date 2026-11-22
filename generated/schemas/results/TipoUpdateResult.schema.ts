import * as z from "zod";
import { ComentarioSchema } from "../models/Comentario.schema.ts";
import { ConfiguracionSchema } from "../models/Configuracion.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { LibroSchema } from "../models/Libro.schema.ts";
export const TipoUpdateResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		nombre: z.string().optional(),
		tabla: z.string().optional(),
		estadoId: z.number().int(),
		estado: EstadoSchema.optional(),
		configuraciones: z.array(ConfiguracionSchema).optional(),
		libros: z.array(LibroSchema).optional(),
		comentarios: z.array(ComentarioSchema).optional(),
	}),
);
