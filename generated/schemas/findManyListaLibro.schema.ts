import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaLibroScalarFieldEnumSchema } from "./enums/ListaLibroScalarFieldEnum.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./objects/LibroArgs.schema.ts";
import { ListaArgsObjectSchema as ListaArgsObjectSchema } from "./objects/ListaArgs.schema.ts";
import { ListaLibroIncludeObjectSchema as ListaLibroIncludeObjectSchema } from "./objects/ListaLibroInclude.schema.ts";
import { ListaLibroOrderByWithRelationInputObjectSchema as ListaLibroOrderByWithRelationInputObjectSchema } from "./objects/ListaLibroOrderByWithRelationInput.schema.ts";
import { ListaLibroWhereInputObjectSchema as ListaLibroWhereInputObjectSchema } from "./objects/ListaLibroWhereInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./objects/ListaLibroWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ListaLibroFindManySelectSchema: z.ZodType<Prisma.ListaLibroSelect> = z
	.object({
		id: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		listaId: z.boolean().optional(),
		lista: z.union([z.boolean(), z.lazy(() => ListaArgsObjectSchema)]).optional(),
		libroId: z.boolean().optional(),
		libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaLibroSelect>;

export const ListaLibroFindManySelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		listaId: z.boolean().optional(),
		lista: z.union([z.boolean(), z.lazy(() => ListaArgsObjectSchema)]).optional(),
		libroId: z.boolean().optional(),
		libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
	})
	.strict();

export const ListaLibroFindManySchema: z.ZodType<Prisma.ListaLibroFindManyArgs> = z
	.object({
		select: ListaLibroFindManySelectSchema.optional(),
		include: z.lazy(() => ListaLibroIncludeObjectSchema.optional()),
		orderBy: z.union([ListaLibroOrderByWithRelationInputObjectSchema, ListaLibroOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ListaLibroWhereInputObjectSchema.optional(),
		cursor: ListaLibroWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ListaLibroScalarFieldEnumSchema, ListaLibroScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaLibroFindManyArgs>;

export const ListaLibroFindManyZodSchema = z
	.object({
		select: ListaLibroFindManySelectSchema.optional(),
		include: z.lazy(() => ListaLibroIncludeObjectSchema.optional()),
		orderBy: z.union([ListaLibroOrderByWithRelationInputObjectSchema, ListaLibroOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ListaLibroWhereInputObjectSchema.optional(),
		cursor: ListaLibroWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ListaLibroScalarFieldEnumSchema, ListaLibroScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
