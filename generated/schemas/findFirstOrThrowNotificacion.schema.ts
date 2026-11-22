import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { NotificacionScalarFieldEnumSchema } from "./enums/NotificacionScalarFieldEnum.schema.ts";
import { NotificacionIncludeObjectSchema as NotificacionIncludeObjectSchema } from "./objects/NotificacionInclude.schema.ts";
import { NotificacionOrderByWithRelationInputObjectSchema as NotificacionOrderByWithRelationInputObjectSchema } from "./objects/NotificacionOrderByWithRelationInput.schema.ts";
import { NotificacionWhereInputObjectSchema as NotificacionWhereInputObjectSchema } from "./objects/NotificacionWhereInput.schema.ts";
import { NotificacionWhereUniqueInputObjectSchema as NotificacionWhereUniqueInputObjectSchema } from "./objects/NotificacionWhereUniqueInput.schema.ts";
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from "./objects/UsuarioArgs.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NotificacionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.NotificacionSelect> = z
	.object({
		id: z.boolean().optional(),
		titulo: z.boolean().optional(),
		mensaje: z.boolean().optional(),
		tipo: z.boolean().optional(),
		leida: z.boolean().optional(),
		usuarioId: z.boolean().optional(),
		usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
		entidadId: z.boolean().optional(),
		entidadTipo: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.NotificacionSelect>;

export const NotificacionFindFirstOrThrowSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		titulo: z.boolean().optional(),
		mensaje: z.boolean().optional(),
		tipo: z.boolean().optional(),
		leida: z.boolean().optional(),
		usuarioId: z.boolean().optional(),
		usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
		entidadId: z.boolean().optional(),
		entidadTipo: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
	})
	.strict();

export const NotificacionFindFirstOrThrowSchema: z.ZodType<Prisma.NotificacionFindFirstOrThrowArgs> = z
	.object({
		select: NotificacionFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => NotificacionIncludeObjectSchema.optional()),
		orderBy: z.union([NotificacionOrderByWithRelationInputObjectSchema, NotificacionOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: NotificacionWhereInputObjectSchema.optional(),
		cursor: NotificacionWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([NotificacionScalarFieldEnumSchema, NotificacionScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.NotificacionFindFirstOrThrowArgs>;

export const NotificacionFindFirstOrThrowZodSchema = z
	.object({
		select: NotificacionFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => NotificacionIncludeObjectSchema.optional()),
		orderBy: z.union([NotificacionOrderByWithRelationInputObjectSchema, NotificacionOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: NotificacionWhereInputObjectSchema.optional(),
		cursor: NotificacionWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([NotificacionScalarFieldEnumSchema, NotificacionScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
