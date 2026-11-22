import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioFindManySchema as ComentarioFindManySchema } from "../findManyComentario.schema.ts";
import { FavoritoFindManySchema as FavoritoFindManySchema } from "../findManyFavorito.schema.ts";
import { GlosarioFindManySchema as GlosarioFindManySchema } from "../findManyGlosario.schema.ts";
import { LibroFindManySchema as LibroFindManySchema } from "../findManyLibro.schema.ts";
import { MarcadorFindManySchema as MarcadorFindManySchema } from "../findManyMarcador.schema.ts";
import { NotaAutorFindManySchema as NotaAutorFindManySchema } from "../findManyNotaAutor.schema.ts";
import { SeguirUsuarioFindManySchema as SeguirUsuarioFindManySchema } from "../findManySeguirUsuario.schema.ts";
import { AvatarArgsObjectSchema as AvatarArgsObjectSchema } from "./AvatarArgs.schema.ts";
import { EscritorCountOutputTypeArgsObjectSchema as EscritorCountOutputTypeArgsObjectSchema } from "./EscritorCountOutputTypeArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from "./UsuarioArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			nombres: z.boolean().optional(),
			apellidos: z.boolean().optional(),
			alias: z.boolean().optional(),
			descripcion: z.boolean().optional(),
			fechaNacimiento: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			usuarioId: z.boolean().optional(),
			usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
			avatarId: z.boolean().optional(),
			avatar: z.union([z.boolean(), z.lazy(() => AvatarArgsObjectSchema)]).optional(),
			estadoId: z.boolean().optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
			libros: z.union([z.boolean(), z.lazy(() => LibroFindManySchema)]).optional(),
			comentarios: z.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)]).optional(),
			favoritos: z.union([z.boolean(), z.lazy(() => FavoritoFindManySchema)]).optional(),
			glosarios: z.union([z.boolean(), z.lazy(() => GlosarioFindManySchema)]).optional(),
			notasAutor: z.union([z.boolean(), z.lazy(() => NotaAutorFindManySchema)]).optional(),
			marcadores: z.union([z.boolean(), z.lazy(() => MarcadorFindManySchema)]).optional(),
			seguidores: z.union([z.boolean(), z.lazy(() => SeguirUsuarioFindManySchema)]).optional(),
			siguiendo: z.union([z.boolean(), z.lazy(() => SeguirUsuarioFindManySchema)]).optional(),
			_count: z.union([z.boolean(), z.lazy(() => EscritorCountOutputTypeArgsObjectSchema)]).optional(),
		})
		.strict();
export const EscritorSelectObjectSchema: z.ZodType<Prisma.EscritorSelect> = makeSchema() as unknown as z.ZodType<Prisma.EscritorSelect>;
export const EscritorSelectObjectZodSchema = makeSchema();
