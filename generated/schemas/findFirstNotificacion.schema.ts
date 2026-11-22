import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotificacionScalarFieldEnumSchema } from "./enums/NotificacionScalarFieldEnum.schema.ts";
import { NotificacionIncludeObjectSchema as NotificacionIncludeObjectSchema } from "./objects/NotificacionInclude.schema.ts";
import { NotificacionOrderByWithRelationInputObjectSchema as NotificacionOrderByWithRelationInputObjectSchema } from "./objects/NotificacionOrderByWithRelationInput.schema.ts";
import { NotificacionWhereInputObjectSchema as NotificacionWhereInputObjectSchema } from "./objects/NotificacionWhereInput.schema.ts";
import { NotificacionWhereUniqueInputObjectSchema as NotificacionWhereUniqueInputObjectSchema } from "./objects/NotificacionWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NotificacionFindFirstSelectSchema: z.ZodType<Prisma.NotificacionSelect> =
	z
		.object({
			id: z.boolean().optional(),
			titulo: z.boolean().optional(),
			mensaje: z.boolean().optional(),
			tipo: z.boolean().optional(),
			leida: z.boolean().optional(),
			usuarioId: z.boolean().optional(),
			usuario: z.boolean().optional(),
			entidadId: z.boolean().optional(),
			entidadTipo: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.NotificacionSelect>;

export const NotificacionFindFirstSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		titulo: z.boolean().optional(),
		mensaje: z.boolean().optional(),
		tipo: z.boolean().optional(),
		leida: z.boolean().optional(),
		usuarioId: z.boolean().optional(),
		usuario: z.boolean().optional(),
		entidadId: z.boolean().optional(),
		entidadTipo: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
	})
	.strict();

export const NotificacionFindFirstSchema: z.ZodType<Prisma.NotificacionFindFirstArgs> =
	z
		.object({
			select: NotificacionFindFirstSelectSchema.optional(),
			include: z.lazy(() => NotificacionIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					NotificacionOrderByWithRelationInputObjectSchema,
					NotificacionOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: NotificacionWhereInputObjectSchema.optional(),
			cursor: NotificacionWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					NotificacionScalarFieldEnumSchema,
					NotificacionScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.NotificacionFindFirstArgs>;

export const NotificacionFindFirstZodSchema = z
	.object({
		select: NotificacionFindFirstSelectSchema.optional(),
		include: z.lazy(() => NotificacionIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				NotificacionOrderByWithRelationInputObjectSchema,
				NotificacionOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: NotificacionWhereInputObjectSchema.optional(),
		cursor: NotificacionWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				NotificacionScalarFieldEnumSchema,
				NotificacionScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
