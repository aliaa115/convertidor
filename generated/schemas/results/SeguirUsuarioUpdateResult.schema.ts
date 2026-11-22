import * as z from "zod";
import { EscritorSchema } from "../models/Escritor.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
export const SeguirUsuarioUpdateResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		escritor: EscritorSchema.optional(),
		escritorSeguidoId: z.number().int(),
		seguido: EscritorSchema.optional(),
		estadoId: z.number().int(),
		estado: EstadoSchema.optional(),
	}),
);
