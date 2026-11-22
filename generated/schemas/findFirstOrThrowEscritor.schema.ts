import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EscritorScalarFieldEnumSchema } from "./enums/EscritorScalarFieldEnum.schema.ts";
import { ComentarioFindManySchema } from "./findManyComentario.schema.ts";
import { FavoritoFindManySchema } from "./findManyFavorito.schema.ts";
import { GlosarioFindManySchema } from "./findManyGlosario.schema.ts";
import { LibroFindManySchema } from "./findManyLibro.schema.ts";
import { MarcadorFindManySchema } from "./findManyMarcador.schema.ts";
import { NotaAutorFindManySchema } from "./findManyNotaAutor.schema.ts";
import { SeguirUsuarioFindManySchema } from "./findManySeguirUsuario.schema.ts";
import { AvatarArgsObjectSchema as AvatarArgsObjectSchema } from "./objects/AvatarArgs.schema.ts";
import { EscritorCountOutputTypeArgsObjectSchema as EscritorCountOutputTypeArgsObjectSchema } from "./objects/EscritorCountOutputTypeArgs.schema.ts";
import { EscritorIncludeObjectSchema as EscritorIncludeObjectSchema } from "./objects/EscritorInclude.schema.ts";
import { EscritorOrderByWithRelationInputObjectSchema as EscritorOrderByWithRelationInputObjectSchema } from "./objects/EscritorOrderByWithRelationInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./objects/EscritorWhereInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./objects/EscritorWhereUniqueInput.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from "./objects/UsuarioArgs.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EscritorFindFirstOrThrowSelectSchema: z.ZodType<Prisma.EscritorSelect> = z
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
	.strict() as unknown as z.ZodType<Prisma.EscritorSelect>;

export const EscritorFindFirstOrThrowSelectZodSchema = z
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

export const EscritorFindFirstOrThrowSchema: z.ZodType<Prisma.EscritorFindFirstOrThrowArgs> = z
	.object({
		select: EscritorFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => EscritorIncludeObjectSchema.optional()),
		orderBy: z.union([EscritorOrderByWithRelationInputObjectSchema, EscritorOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: EscritorWhereInputObjectSchema.optional(),
		cursor: EscritorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([EscritorScalarFieldEnumSchema, EscritorScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EscritorFindFirstOrThrowArgs>;

export const EscritorFindFirstOrThrowZodSchema = z
	.object({
		select: EscritorFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => EscritorIncludeObjectSchema.optional()),
		orderBy: z.union([EscritorOrderByWithRelationInputObjectSchema, EscritorOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: EscritorWhereInputObjectSchema.optional(),
		cursor: EscritorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([EscritorScalarFieldEnumSchema, EscritorScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
