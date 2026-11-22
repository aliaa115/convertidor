import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { UsuarioScalarFieldEnumSchema } from "./enums/UsuarioScalarFieldEnum.schema.ts";
import { UsuarioIncludeObjectSchema as UsuarioIncludeObjectSchema } from "./objects/UsuarioInclude.schema.ts";
import { UsuarioOrderByWithRelationInputObjectSchema as UsuarioOrderByWithRelationInputObjectSchema } from "./objects/UsuarioOrderByWithRelationInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./objects/UsuarioWhereInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./objects/UsuarioWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UsuarioFindFirstSelectSchema: z.ZodType<Prisma.UsuarioSelect> = z
	.object({
		id: z.boolean().optional(),
		userName: z.boolean().optional(),
		email: z.boolean().optional(),
		password: z.boolean().optional(),
		nivel: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		configuracion: z.boolean().optional(),
		escritor: z.boolean().optional(),
		listas: z.boolean().optional(),
		notificacions: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.UsuarioSelect>;

export const UsuarioFindFirstSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		userName: z.boolean().optional(),
		email: z.boolean().optional(),
		password: z.boolean().optional(),
		nivel: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		configuracion: z.boolean().optional(),
		escritor: z.boolean().optional(),
		listas: z.boolean().optional(),
		notificacions: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict();

export const UsuarioFindFirstSchema: z.ZodType<Prisma.UsuarioFindFirstArgs> = z
	.object({
		select: UsuarioFindFirstSelectSchema.optional(),
		include: z.lazy(() => UsuarioIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				UsuarioOrderByWithRelationInputObjectSchema,
				UsuarioOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: UsuarioWhereInputObjectSchema.optional(),
		cursor: UsuarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				UsuarioScalarFieldEnumSchema,
				UsuarioScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.UsuarioFindFirstArgs>;

export const UsuarioFindFirstZodSchema = z
	.object({
		select: UsuarioFindFirstSelectSchema.optional(),
		include: z.lazy(() => UsuarioIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				UsuarioOrderByWithRelationInputObjectSchema,
				UsuarioOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: UsuarioWhereInputObjectSchema.optional(),
		cursor: UsuarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				UsuarioScalarFieldEnumSchema,
				UsuarioScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
