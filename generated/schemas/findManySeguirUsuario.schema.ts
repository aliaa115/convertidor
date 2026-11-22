import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { SeguirUsuarioScalarFieldEnumSchema } from "./enums/SeguirUsuarioScalarFieldEnum.schema.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./objects/EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { SeguirUsuarioIncludeObjectSchema as SeguirUsuarioIncludeObjectSchema } from "./objects/SeguirUsuarioInclude.schema.ts";
import { SeguirUsuarioOrderByWithRelationInputObjectSchema as SeguirUsuarioOrderByWithRelationInputObjectSchema } from "./objects/SeguirUsuarioOrderByWithRelationInput.schema.ts";
import { SeguirUsuarioWhereInputObjectSchema as SeguirUsuarioWhereInputObjectSchema } from "./objects/SeguirUsuarioWhereInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./objects/SeguirUsuarioWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SeguirUsuarioFindManySelectSchema: z.ZodType<Prisma.SeguirUsuarioSelect> = z
	.object({
		id: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		escritorSeguidoId: z.boolean().optional(),
		seguido: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioSelect>;

export const SeguirUsuarioFindManySelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		escritorSeguidoId: z.boolean().optional(),
		seguido: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
	})
	.strict();

export const SeguirUsuarioFindManySchema: z.ZodType<Prisma.SeguirUsuarioFindManyArgs> = z
	.object({
		select: SeguirUsuarioFindManySelectSchema.optional(),
		include: z.lazy(() => SeguirUsuarioIncludeObjectSchema.optional()),
		orderBy: z.union([SeguirUsuarioOrderByWithRelationInputObjectSchema, SeguirUsuarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: SeguirUsuarioWhereInputObjectSchema.optional(),
		cursor: SeguirUsuarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([SeguirUsuarioScalarFieldEnumSchema, SeguirUsuarioScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioFindManyArgs>;

export const SeguirUsuarioFindManyZodSchema = z
	.object({
		select: SeguirUsuarioFindManySelectSchema.optional(),
		include: z.lazy(() => SeguirUsuarioIncludeObjectSchema.optional()),
		orderBy: z.union([SeguirUsuarioOrderByWithRelationInputObjectSchema, SeguirUsuarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: SeguirUsuarioWhereInputObjectSchema.optional(),
		cursor: SeguirUsuarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([SeguirUsuarioScalarFieldEnumSchema, SeguirUsuarioScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
