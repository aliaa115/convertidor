import * as z from "zod";
import { EscritorSchema } from "../models/Escritor.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { ParrafoSchema } from "../models/Parrafo.schema.ts";
export const MarcadorDeleteResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		nombre: z.string().optional(),
		color: z.string().optional(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		escritor: EscritorSchema.optional(),
		parrafoId: z.number().int(),
		parrafo: ParrafoSchema.optional(),
		estadoId: z.number().int(),
		estado: EstadoSchema.optional(),
	}),
);
