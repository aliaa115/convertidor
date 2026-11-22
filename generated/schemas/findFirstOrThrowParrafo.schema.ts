import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ParrafoScalarFieldEnumSchema } from "./enums/ParrafoScalarFieldEnum.schema.ts";
import { ComentarioFindManySchema } from "./findManyComentario.schema.ts";
import { MarcadorFindManySchema } from "./findManyMarcador.schema.ts";
import { CapituloArgsObjectSchema as CapituloArgsObjectSchema } from "./objects/CapituloArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { ParrafoCountOutputTypeArgsObjectSchema as ParrafoCountOutputTypeArgsObjectSchema } from "./objects/ParrafoCountOutputTypeArgs.schema.ts";
import { ParrafoIncludeObjectSchema as ParrafoIncludeObjectSchema } from "./objects/ParrafoInclude.schema.ts";
import { ParrafoOrderByWithRelationInputObjectSchema as ParrafoOrderByWithRelationInputObjectSchema } from "./objects/ParrafoOrderByWithRelationInput.schema.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./objects/ParrafoWhereInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./objects/ParrafoWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ParrafoFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ParrafoSelect> = z
	.object({
		id: z.boolean().optional(),
		contenido: z.boolean().optional(),
		indice: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		capituloId: z.boolean().optional(),
		capitulo: z.union([z.boolean(), z.lazy(() => CapituloArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		comentarios: z.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)]).optional(),
		marcadores: z.union([z.boolean(), z.lazy(() => MarcadorFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => ParrafoCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ParrafoSelect>;

export const ParrafoFindFirstOrThrowSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		contenido: z.boolean().optional(),
		indice: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		capituloId: z.boolean().optional(),
		capitulo: z.union([z.boolean(), z.lazy(() => CapituloArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		comentarios: z.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)]).optional(),
		marcadores: z.union([z.boolean(), z.lazy(() => MarcadorFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => ParrafoCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict();

export const ParrafoFindFirstOrThrowSchema: z.ZodType<Prisma.ParrafoFindFirstOrThrowArgs> = z
	.object({
		select: ParrafoFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => ParrafoIncludeObjectSchema.optional()),
		orderBy: z.union([ParrafoOrderByWithRelationInputObjectSchema, ParrafoOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ParrafoWhereInputObjectSchema.optional(),
		cursor: ParrafoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ParrafoScalarFieldEnumSchema, ParrafoScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ParrafoFindFirstOrThrowArgs>;

export const ParrafoFindFirstOrThrowZodSchema = z
	.object({
		select: ParrafoFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => ParrafoIncludeObjectSchema.optional()),
		orderBy: z.union([ParrafoOrderByWithRelationInputObjectSchema, ParrafoOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ParrafoWhereInputObjectSchema.optional(),
		cursor: ParrafoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ParrafoScalarFieldEnumSchema, ParrafoScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
