import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { NotaAutorScalarFieldEnumSchema } from "./enums/NotaAutorScalarFieldEnum.schema.ts";
import { CapituloArgsObjectSchema as CapituloArgsObjectSchema } from "./objects/CapituloArgs.schema.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./objects/EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { NotaAutorIncludeObjectSchema as NotaAutorIncludeObjectSchema } from "./objects/NotaAutorInclude.schema.ts";
import { NotaAutorOrderByWithRelationInputObjectSchema as NotaAutorOrderByWithRelationInputObjectSchema } from "./objects/NotaAutorOrderByWithRelationInput.schema.ts";
import { NotaAutorWhereInputObjectSchema as NotaAutorWhereInputObjectSchema } from "./objects/NotaAutorWhereInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./objects/NotaAutorWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NotaAutorFindManySelectSchema: z.ZodType<Prisma.NotaAutorSelect> = z
	.object({
		id: z.boolean().optional(),
		texto: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		capituloId: z.boolean().optional(),
		capitulo: z.union([z.boolean(), z.lazy(() => CapituloArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.NotaAutorSelect>;

export const NotaAutorFindManySelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		texto: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		capituloId: z.boolean().optional(),
		capitulo: z.union([z.boolean(), z.lazy(() => CapituloArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
	})
	.strict();

export const NotaAutorFindManySchema: z.ZodType<Prisma.NotaAutorFindManyArgs> = z
	.object({
		select: NotaAutorFindManySelectSchema.optional(),
		include: z.lazy(() => NotaAutorIncludeObjectSchema.optional()),
		orderBy: z.union([NotaAutorOrderByWithRelationInputObjectSchema, NotaAutorOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: NotaAutorWhereInputObjectSchema.optional(),
		cursor: NotaAutorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([NotaAutorScalarFieldEnumSchema, NotaAutorScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.NotaAutorFindManyArgs>;

export const NotaAutorFindManyZodSchema = z
	.object({
		select: NotaAutorFindManySelectSchema.optional(),
		include: z.lazy(() => NotaAutorIncludeObjectSchema.optional()),
		orderBy: z.union([NotaAutorOrderByWithRelationInputObjectSchema, NotaAutorOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: NotaAutorWhereInputObjectSchema.optional(),
		cursor: NotaAutorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([NotaAutorScalarFieldEnumSchema, NotaAutorScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
