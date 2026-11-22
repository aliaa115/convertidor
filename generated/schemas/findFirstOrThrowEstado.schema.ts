import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EstadoScalarFieldEnumSchema } from "./enums/EstadoScalarFieldEnum.schema.ts";
import { EstadoIncludeObjectSchema as EstadoIncludeObjectSchema } from "./objects/EstadoInclude.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./objects/EstadoOrderByWithRelationInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./objects/EstadoWhereInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./objects/EstadoWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EstadoFindFirstOrThrowSelectSchema: z.ZodType<Prisma.EstadoSelect> =
	z
		.object({
			id: z.boolean().optional(),
			nombre: z.boolean().optional(),
			color: z.boolean().optional(),
			icon: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			categorias: z.boolean().optional(),
			etiquetas: z.boolean().optional(),
			tipos: z.boolean().optional(),
			usuarios: z.boolean().optional(),
			escritores: z.boolean().optional(),
			configuraciones: z.boolean().optional(),
			idioma: z.boolean().optional(),
			libros: z.boolean().optional(),
			capitulos: z.boolean().optional(),
			parrafos: z.boolean().optional(),
			comentarios: z.boolean().optional(),
			libroCategorias: z.boolean().optional(),
			libroEtiquetas: z.boolean().optional(),
			favoritos: z.boolean().optional(),
			glosarios: z.boolean().optional(),
			notasAutor: z.boolean().optional(),
			marcadores: z.boolean().optional(),
			listas: z.boolean().optional(),
			listaLibros: z.boolean().optional(),
			seguirUsuarios: z.boolean().optional(),
			_count: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.EstadoSelect>;

export const EstadoFindFirstOrThrowSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		color: z.boolean().optional(),
		icon: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		categorias: z.boolean().optional(),
		etiquetas: z.boolean().optional(),
		tipos: z.boolean().optional(),
		usuarios: z.boolean().optional(),
		escritores: z.boolean().optional(),
		configuraciones: z.boolean().optional(),
		idioma: z.boolean().optional(),
		libros: z.boolean().optional(),
		capitulos: z.boolean().optional(),
		parrafos: z.boolean().optional(),
		comentarios: z.boolean().optional(),
		libroCategorias: z.boolean().optional(),
		libroEtiquetas: z.boolean().optional(),
		favoritos: z.boolean().optional(),
		glosarios: z.boolean().optional(),
		notasAutor: z.boolean().optional(),
		marcadores: z.boolean().optional(),
		listas: z.boolean().optional(),
		listaLibros: z.boolean().optional(),
		seguirUsuarios: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict();

export const EstadoFindFirstOrThrowSchema: z.ZodType<Prisma.EstadoFindFirstOrThrowArgs> =
	z
		.object({
			select: EstadoFindFirstOrThrowSelectSchema.optional(),
			include: z.lazy(() => EstadoIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					EstadoOrderByWithRelationInputObjectSchema,
					EstadoOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: EstadoWhereInputObjectSchema.optional(),
			cursor: EstadoWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					EstadoScalarFieldEnumSchema,
					EstadoScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.EstadoFindFirstOrThrowArgs>;

export const EstadoFindFirstOrThrowZodSchema = z
	.object({
		select: EstadoFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => EstadoIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				EstadoOrderByWithRelationInputObjectSchema,
				EstadoOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: EstadoWhereInputObjectSchema.optional(),
		cursor: EstadoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([EstadoScalarFieldEnumSchema, EstadoScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict();
