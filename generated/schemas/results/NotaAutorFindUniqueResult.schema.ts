import * as z from "zod";
import { CapituloSchema } from "../models/Capitulo.schema.ts";
import { EscritorSchema } from "../models/Escritor.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
export const NotaAutorFindUniqueResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		texto: z.string().optional(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		escritor: EscritorSchema.optional(),
		capituloId: z.number().int(),
		capitulo: CapituloSchema.optional(),
		estadoId: z.number().int(),
		estado: EstadoSchema.optional(),
	}),
);
