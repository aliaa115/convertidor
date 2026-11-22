import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EscritorScalarFieldEnumSchema } from "./enums/EscritorScalarFieldEnum.schema.ts";
import { EscritorIncludeObjectSchema as EscritorIncludeObjectSchema } from "./objects/EscritorInclude.schema.ts";
import { EscritorOrderByWithRelationInputObjectSchema as EscritorOrderByWithRelationInputObjectSchema } from "./objects/EscritorOrderByWithRelationInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./objects/EscritorWhereInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./objects/EscritorWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EscritorFindManySelectSchema: z.ZodType<Prisma.EscritorSelect> = z
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
		usuario: z.boolean().optional(),
		avatarId: z.boolean().optional(),
		avatar: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		libros: z.boolean().optional(),
		comentarios: z.boolean().optional(),
		favoritos: z.boolean().optional(),
		glosarios: z.boolean().optional(),
		notasAutor: z.boolean().optional(),
		marcadores: z.boolean().optional(),
		seguidores: z.boolean().optional(),
		siguiendo: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EscritorSelect>;

export const EscritorFindManySelectZodSchema = z
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
		usuario: z.boolean().optional(),
		avatarId: z.boolean().optional(),
		avatar: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		libros: z.boolean().optional(),
		comentarios: z.boolean().optional(),
		favoritos: z.boolean().optional(),
		glosarios: z.boolean().optional(),
		notasAutor: z.boolean().optional(),
		marcadores: z.boolean().optional(),
		seguidores: z.boolean().optional(),
		siguiendo: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict();

export const EscritorFindManySchema: z.ZodType<Prisma.EscritorFindManyArgs> = z
	.object({
		select: EscritorFindManySelectSchema.optional(),
		include: z.lazy(() => EscritorIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				EscritorOrderByWithRelationInputObjectSchema,
				EscritorOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: EscritorWhereInputObjectSchema.optional(),
		cursor: EscritorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				EscritorScalarFieldEnumSchema,
				EscritorScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EscritorFindManyArgs>;

export const EscritorFindManyZodSchema = z
	.object({
		select: EscritorFindManySelectSchema.optional(),
		include: z.lazy(() => EscritorIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				EscritorOrderByWithRelationInputObjectSchema,
				EscritorOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: EscritorWhereInputObjectSchema.optional(),
		cursor: EscritorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				EscritorScalarFieldEnumSchema,
				EscritorScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
