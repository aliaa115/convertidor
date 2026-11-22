import * as z from "zod";
import { AvatarSchema } from "../models/Avatar.schema.ts";
import { ComentarioSchema } from "../models/Comentario.schema.ts";
import { EstadoSchema } from "../models/Estado.schema.ts";
import { FavoritoSchema } from "../models/Favorito.schema.ts";
import { GlosarioSchema } from "../models/Glosario.schema.ts";
import { LibroSchema } from "../models/Libro.schema.ts";
import { MarcadorSchema } from "../models/Marcador.schema.ts";
import { NotaAutorSchema } from "../models/NotaAutor.schema.ts";
import { SeguirUsuarioSchema } from "../models/SeguirUsuario.schema.ts";
import { UsuarioSchema } from "../models/Usuario.schema.ts";
export const EscritorUpdateResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		nombres: z.string().optional(),
		apellidos: z.string().optional(),
		alias: z.string().optional(),
		descripcion: z.string().optional(),
		fechaNacimiento: z.date().optional(),
		createdAt: z.date(),
		updatedAt: z.date(),
		usuarioId: z.number().int().optional(),
		usuario: UsuarioSchema.optional(),
		avatarId: z.number().int(),
		avatar: AvatarSchema.optional(),
		estadoId: z.number().int(),
		estado: EstadoSchema.optional(),
		libros: z.array(LibroSchema).optional(),
		comentarios: z.array(ComentarioSchema).optional(),
		favoritos: z.array(FavoritoSchema).optional(),
		glosarios: z.array(GlosarioSchema).optional(),
		notasAutor: z.array(NotaAutorSchema).optional(),
		marcadores: z.array(MarcadorSchema).optional(),
		seguidores: z.array(SeguirUsuarioSchema).optional(),
		siguiendo: z.array(SeguirUsuarioSchema).optional(),
	}),
);
