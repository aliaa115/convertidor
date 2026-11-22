import * as z from "zod";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { TipoSchema } from "../models/Tipo.schema.ts";
import { UsuarioSchema } from "../models/Usuario.schema.ts";
export const ConfiguracionUpsertResultSchema = z.object({
	id: z.number().int(),
	valor: z.string().optional(),
	createdAt: z.date(),
	updatedAt: z.date(),
	usuarioId: z.number().int().optional(),
	usuario: UsuarioSchema.optional(),
	tipoId: z.number().int().optional(),
	tipo: TipoSchema.optional(),
	estadoId: z.number().int(),
	estado: EstadoSchema.optional(),
});
