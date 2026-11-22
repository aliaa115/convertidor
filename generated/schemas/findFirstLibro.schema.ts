import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroScalarFieldEnumSchema } from "./enums/LibroScalarFieldEnum.schema.ts";
import { LibroIncludeObjectSchema as LibroIncludeObjectSchema } from "./objects/LibroInclude.schema.ts";
import { LibroOrderByWithRelationInputObjectSchema as LibroOrderByWithRelationInputObjectSchema } from "./objects/LibroOrderByWithRelationInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./objects/LibroWhereInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./objects/LibroWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LibroFindFirstSelectSchema: z.ZodType<Prisma.LibroSelect> = z
	.object({
		id: z.boolean().optional(),
		titulo: z.boolean().optional(),
		resumen: z.boolean().optional(),
		portada: z.boolean().optional(),
		publicado: z.boolean().optional(),
		fechaPublicacion: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.boolean().optional(),
		tipoId: z.boolean().optional(),
		tipo: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		idiomaId: z.boolean().optional(),
		idioma: z.boolean().optional(),
		capitulos: z.boolean().optional(),
		categorias: z.boolean().optional(),
		etiquetas: z.boolean().optional(),
		favoritos: z.boolean().optional(),
		glosarios: z.boolean().optional(),
		listaLibros: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroSelect>;

export const LibroFindFirstSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		titulo: z.boolean().optional(),
		resumen: z.boolean().optional(),
		portada: z.boolean().optional(),
		publicado: z.boolean().optional(),
		fechaPublicacion: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.boolean().optional(),
		tipoId: z.boolean().optional(),
		tipo: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		idiomaId: z.boolean().optional(),
		idioma: z.boolean().optional(),
		capitulos: z.boolean().optional(),
		categorias: z.boolean().optional(),
		etiquetas: z.boolean().optional(),
		favoritos: z.boolean().optional(),
		glosarios: z.boolean().optional(),
		listaLibros: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict();

export const LibroFindFirstSchema: z.ZodType<Prisma.LibroFindFirstArgs> = z
	.object({
		select: LibroFindFirstSelectSchema.optional(),
		include: z.lazy(() => LibroIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				LibroOrderByWithRelationInputObjectSchema,
				LibroOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: LibroWhereInputObjectSchema.optional(),
		cursor: LibroWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([LibroScalarFieldEnumSchema, LibroScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroFindFirstArgs>;

export const LibroFindFirstZodSchema = z
	.object({
		select: LibroFindFirstSelectSchema.optional(),
		include: z.lazy(() => LibroIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				LibroOrderByWithRelationInputObjectSchema,
				LibroOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: LibroWhereInputObjectSchema.optional(),
		cursor: LibroWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([LibroScalarFieldEnumSchema, LibroScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict();
