import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { MarcadorScalarFieldEnumSchema } from "./enums/MarcadorScalarFieldEnum.schema.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./objects/EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { MarcadorIncludeObjectSchema as MarcadorIncludeObjectSchema } from "./objects/MarcadorInclude.schema.ts";
import { MarcadorOrderByWithRelationInputObjectSchema as MarcadorOrderByWithRelationInputObjectSchema } from "./objects/MarcadorOrderByWithRelationInput.schema.ts";
import { MarcadorWhereInputObjectSchema as MarcadorWhereInputObjectSchema } from "./objects/MarcadorWhereInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./objects/MarcadorWhereUniqueInput.schema.ts";
import { ParrafoArgsObjectSchema as ParrafoArgsObjectSchema } from "./objects/ParrafoArgs.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MarcadorFindFirstSelectSchema: z.ZodType<Prisma.MarcadorSelect> = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		color: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		parrafoId: z.boolean().optional(),
		parrafo: z.union([z.boolean(), z.lazy(() => ParrafoArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.MarcadorSelect>;

export const MarcadorFindFirstSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		color: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		parrafoId: z.boolean().optional(),
		parrafo: z.union([z.boolean(), z.lazy(() => ParrafoArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
	})
	.strict();

export const MarcadorFindFirstSchema: z.ZodType<Prisma.MarcadorFindFirstArgs> = z
	.object({
		select: MarcadorFindFirstSelectSchema.optional(),
		include: z.lazy(() => MarcadorIncludeObjectSchema.optional()),
		orderBy: z.union([MarcadorOrderByWithRelationInputObjectSchema, MarcadorOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: MarcadorWhereInputObjectSchema.optional(),
		cursor: MarcadorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([MarcadorScalarFieldEnumSchema, MarcadorScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.MarcadorFindFirstArgs>;

export const MarcadorFindFirstZodSchema = z
	.object({
		select: MarcadorFindFirstSelectSchema.optional(),
		include: z.lazy(() => MarcadorIncludeObjectSchema.optional()),
		orderBy: z.union([MarcadorOrderByWithRelationInputObjectSchema, MarcadorOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: MarcadorWhereInputObjectSchema.optional(),
		cursor: MarcadorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([MarcadorScalarFieldEnumSchema, MarcadorScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
