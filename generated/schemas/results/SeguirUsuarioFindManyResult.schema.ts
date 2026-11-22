import * as z from "zod";
import { EscritorSchema } from "../models/Escritor.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
export const SeguirUsuarioFindManyResultSchema = z.object({
	data: z.array(
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
	),
	pagination: z.object({
		page: z.number().int().min(1),
		pageSize: z.number().int().min(1),
		total: z.number().int().min(0),
		totalPages: z.number().int().min(0),
		hasNext: z.boolean(),
		hasPrev: z.boolean(),
	}),
});
