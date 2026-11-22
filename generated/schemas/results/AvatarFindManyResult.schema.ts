import * as z from "zod";
import { EscritorSchema } from "../models/Escritor.schema.ts";
export const AvatarFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			nombre: z.string(),
			url: z.string(),
			escritores: z.array(EscritorSchema).optional(),
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
