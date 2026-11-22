import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaScalarFieldEnumSchema } from "./enums/ListaScalarFieldEnum.schema.ts";
import { ListaLibroFindManySchema } from "./findManyListaLibro.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { ListaCountOutputTypeArgsObjectSchema as ListaCountOutputTypeArgsObjectSchema } from "./objects/ListaCountOutputTypeArgs.schema.ts";
import { ListaIncludeObjectSchema as ListaIncludeObjectSchema } from "./objects/ListaInclude.schema.ts";
import { ListaOrderByWithRelationInputObjectSchema as ListaOrderByWithRelationInputObjectSchema } from "./objects/ListaOrderByWithRelationInput.schema.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./objects/ListaWhereInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./objects/ListaWhereUniqueInput.schema.ts";
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from "./objects/UsuarioArgs.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ListaFindFirstSelectSchema: z.ZodType<Prisma.ListaSelect> = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		privada: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		usuarioId: z.boolean().optional(),
		usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		libros: z.union([z.boolean(), z.lazy(() => ListaLibroFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => ListaCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaSelect>;

export const ListaFindFirstSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		privada: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		usuarioId: z.boolean().optional(),
		usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		libros: z.union([z.boolean(), z.lazy(() => ListaLibroFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => ListaCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict();

export const ListaFindFirstSchema: z.ZodType<Prisma.ListaFindFirstArgs> = z
	.object({
		select: ListaFindFirstSelectSchema.optional(),
		include: z.lazy(() => ListaIncludeObjectSchema.optional()),
		orderBy: z.union([ListaOrderByWithRelationInputObjectSchema, ListaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ListaWhereInputObjectSchema.optional(),
		cursor: ListaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ListaScalarFieldEnumSchema, ListaScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaFindFirstArgs>;

export const ListaFindFirstZodSchema = z
	.object({
		select: ListaFindFirstSelectSchema.optional(),
		include: z.lazy(() => ListaIncludeObjectSchema.optional()),
		orderBy: z.union([ListaOrderByWithRelationInputObjectSchema, ListaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ListaWhereInputObjectSchema.optional(),
		cursor: ListaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ListaScalarFieldEnumSchema, ListaScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
