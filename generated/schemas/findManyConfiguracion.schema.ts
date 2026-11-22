import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ConfiguracionScalarFieldEnumSchema } from "./enums/ConfiguracionScalarFieldEnum.schema.ts";
import { ConfiguracionIncludeObjectSchema as ConfiguracionIncludeObjectSchema } from "./objects/ConfiguracionInclude.schema.ts";
import { ConfiguracionOrderByWithRelationInputObjectSchema as ConfiguracionOrderByWithRelationInputObjectSchema } from "./objects/ConfiguracionOrderByWithRelationInput.schema.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./objects/ConfiguracionWhereInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./objects/ConfiguracionWhereUniqueInput.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { TipoArgsObjectSchema as TipoArgsObjectSchema } from "./objects/TipoArgs.schema.ts";
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from "./objects/UsuarioArgs.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConfiguracionFindManySelectSchema: z.ZodType<Prisma.ConfiguracionSelect> = z
	.object({
		id: z.boolean().optional(),
		valor: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		usuarioId: z.boolean().optional(),
		usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
		tipoId: z.boolean().optional(),
		tipo: z.union([z.boolean(), z.lazy(() => TipoArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ConfiguracionSelect>;

export const ConfiguracionFindManySelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		valor: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		usuarioId: z.boolean().optional(),
		usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
		tipoId: z.boolean().optional(),
		tipo: z.union([z.boolean(), z.lazy(() => TipoArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
	})
	.strict();

export const ConfiguracionFindManySchema: z.ZodType<Prisma.ConfiguracionFindManyArgs> = z
	.object({
		select: ConfiguracionFindManySelectSchema.optional(),
		include: z.lazy(() => ConfiguracionIncludeObjectSchema.optional()),
		orderBy: z.union([ConfiguracionOrderByWithRelationInputObjectSchema, ConfiguracionOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ConfiguracionWhereInputObjectSchema.optional(),
		cursor: ConfiguracionWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ConfiguracionScalarFieldEnumSchema, ConfiguracionScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ConfiguracionFindManyArgs>;

export const ConfiguracionFindManyZodSchema = z
	.object({
		select: ConfiguracionFindManySelectSchema.optional(),
		include: z.lazy(() => ConfiguracionIncludeObjectSchema.optional()),
		orderBy: z.union([ConfiguracionOrderByWithRelationInputObjectSchema, ConfiguracionOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ConfiguracionWhereInputObjectSchema.optional(),
		cursor: ConfiguracionWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ConfiguracionScalarFieldEnumSchema, ConfiguracionScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
