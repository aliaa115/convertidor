import * as z from "zod";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { ListaLibroSchema } from "../models/ListaLibro.schema.ts";
import { UsuarioSchema } from "../models/Usuario.schema.ts";
export const ListaCreateResultSchema = z.object({
	id: z.number().int(),
	nombre: z.string().optional(),
	privada: z.boolean(),
	createdAt: z.date(),
	updatedAt: z.date(),
	usuarioId: z.number().int().optional(),
	usuario: UsuarioSchema.optional(),
	estadoId: z.number().int(),
	estado: EstadoSchema.optional(),
	libros: z.array(ListaLibroSchema).optional(),
});
