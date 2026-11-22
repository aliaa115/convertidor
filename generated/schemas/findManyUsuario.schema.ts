import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { UsuarioScalarFieldEnumSchema } from "./enums/UsuarioScalarFieldEnum.schema.ts";
import { ListaFindManySchema } from "./findManyLista.schema.ts";
import { NotificacionFindManySchema } from "./findManyNotificacion.schema.ts";
import { ConfiguracionArgsObjectSchema as ConfiguracionArgsObjectSchema } from "./objects/ConfiguracionArgs.schema.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./objects/EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { UsuarioCountOutputTypeArgsObjectSchema as UsuarioCountOutputTypeArgsObjectSchema } from "./objects/UsuarioCountOutputTypeArgs.schema.ts";
import { UsuarioIncludeObjectSchema as UsuarioIncludeObjectSchema } from "./objects/UsuarioInclude.schema.ts";
import { UsuarioOrderByWithRelationInputObjectSchema as UsuarioOrderByWithRelationInputObjectSchema } from "./objects/UsuarioOrderByWithRelationInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./objects/UsuarioWhereInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./objects/UsuarioWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UsuarioFindManySelectSchema: z.ZodType<Prisma.UsuarioSelect> = z
	.object({
		id: z.boolean().optional(),
		userName: z.boolean().optional(),
		email: z.boolean().optional(),
		password: z.boolean().optional(),
		nivel: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		configuracion: z.union([z.boolean(), z.lazy(() => ConfiguracionArgsObjectSchema)]).optional(),
		escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		listas: z.union([z.boolean(), z.lazy(() => ListaFindManySchema)]).optional(),
		notificacions: z.union([z.boolean(), z.lazy(() => NotificacionFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => UsuarioCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.UsuarioSelect>;

export const UsuarioFindManySelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		userName: z.boolean().optional(),
		email: z.boolean().optional(),
		password: z.boolean().optional(),
		nivel: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		configuracion: z.union([z.boolean(), z.lazy(() => ConfiguracionArgsObjectSchema)]).optional(),
		escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		listas: z.union([z.boolean(), z.lazy(() => ListaFindManySchema)]).optional(),
		notificacions: z.union([z.boolean(), z.lazy(() => NotificacionFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => UsuarioCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict();

export const UsuarioFindManySchema: z.ZodType<Prisma.UsuarioFindManyArgs> = z
	.object({
		select: UsuarioFindManySelectSchema.optional(),
		include: z.lazy(() => UsuarioIncludeObjectSchema.optional()),
		orderBy: z.union([UsuarioOrderByWithRelationInputObjectSchema, UsuarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: UsuarioWhereInputObjectSchema.optional(),
		cursor: UsuarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([UsuarioScalarFieldEnumSchema, UsuarioScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.UsuarioFindManyArgs>;

export const UsuarioFindManyZodSchema = z
	.object({
		select: UsuarioFindManySelectSchema.optional(),
		include: z.lazy(() => UsuarioIncludeObjectSchema.optional()),
		orderBy: z.union([UsuarioOrderByWithRelationInputObjectSchema, UsuarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: UsuarioWhereInputObjectSchema.optional(),
		cursor: UsuarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([UsuarioScalarFieldEnumSchema, UsuarioScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
