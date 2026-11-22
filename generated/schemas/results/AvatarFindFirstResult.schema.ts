import * as z from "zod";
import { EscritorSchema } from "../models/Escritor.schema.ts";
export const AvatarFindFirstResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		nombre: z.string(),
		url: z.string(),
		escritores: z.array(EscritorSchema).optional(),
	}),
);
