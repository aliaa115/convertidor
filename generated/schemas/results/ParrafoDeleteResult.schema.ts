import * as z from "zod";
import { CapituloSchema } from "../models/Capitulo.schema.ts";
import { ComentarioSchema } from "../models/Comentario.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { MarcadorSchema } from "../models/Marcador.schema.ts";
export const ParrafoDeleteResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		contenido: z.string().optional(),
		indice: z.number().int().optional(),
		createdAt: z.date(),
		updatedAt: z.date(),
		capituloId: z.number().int(),
		capitulo: CapituloSchema.optional(),
		estadoId: z.number().int(),
		estado: EstadoSchema.optional(),
		comentarios: z.array(ComentarioSchema).optional(),
		marcadores: z.array(MarcadorSchema).optional(),
	}),
);
