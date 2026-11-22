import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ComentarioScalarFieldEnumSchema } from "./enums/ComentarioScalarFieldEnum.schema.ts";
import { ComentarioFindManySchema } from "./findManyComentario.schema.ts";
import { ComentarioArgsObjectSchema as ComentarioArgsObjectSchema } from "./objects/ComentarioArgs.schema.ts";
import { ComentarioCountOutputTypeArgsObjectSchema as ComentarioCountOutputTypeArgsObjectSchema } from "./objects/ComentarioCountOutputTypeArgs.schema.ts";
import { ComentarioIncludeObjectSchema as ComentarioIncludeObjectSchema } from "./objects/ComentarioInclude.schema.ts";
import { ComentarioOrderByWithRelationInputObjectSchema as ComentarioOrderByWithRelationInputObjectSchema } from "./objects/ComentarioOrderByWithRelationInput.schema.ts";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./objects/ComentarioWhereInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./objects/ComentarioWhereUniqueInput.schema.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./objects/EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { ParrafoArgsObjectSchema as ParrafoArgsObjectSchema } from "./objects/ParrafoArgs.schema.ts";
import { TipoArgsObjectSchema as TipoArgsObjectSchema } from "./objects/TipoArgs.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ComentarioFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ComentarioSelect> = z
	.object({
		id: z.boolean().optional(),
		contenido: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		parrafoId: z.boolean().optional(),
		parrafo: z.union([z.boolean(), z.lazy(() => ParrafoArgsObjectSchema)]).optional(),
		comentarioPadreId: z.boolean().optional(),
		padre: z.union([z.boolean(), z.lazy(() => ComentarioArgsObjectSchema)]).optional(),
		respuestas: z.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)]).optional(),
		tipoId: z.boolean().optional(),
		tipo: z.union([z.boolean(), z.lazy(() => TipoArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => ComentarioCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ComentarioSelect>;

export const ComentarioFindFirstOrThrowSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		contenido: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		parrafoId: z.boolean().optional(),
		parrafo: z.union([z.boolean(), z.lazy(() => ParrafoArgsObjectSchema)]).optional(),
		comentarioPadreId: z.boolean().optional(),
		padre: z.union([z.boolean(), z.lazy(() => ComentarioArgsObjectSchema)]).optional(),
		respuestas: z.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)]).optional(),
		tipoId: z.boolean().optional(),
		tipo: z.union([z.boolean(), z.lazy(() => TipoArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => ComentarioCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict();

export const ComentarioFindFirstOrThrowSchema: z.ZodType<Prisma.ComentarioFindFirstOrThrowArgs> = z
	.object({
		select: ComentarioFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => ComentarioIncludeObjectSchema.optional()),
		orderBy: z.union([ComentarioOrderByWithRelationInputObjectSchema, ComentarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ComentarioWhereInputObjectSchema.optional(),
		cursor: ComentarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ComentarioScalarFieldEnumSchema, ComentarioScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ComentarioFindFirstOrThrowArgs>;

export const ComentarioFindFirstOrThrowZodSchema = z
	.object({
		select: ComentarioFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => ComentarioIncludeObjectSchema.optional()),
		orderBy: z.union([ComentarioOrderByWithRelationInputObjectSchema, ComentarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ComentarioWhereInputObjectSchema.optional(),
		cursor: ComentarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ComentarioScalarFieldEnumSchema, ComentarioScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
