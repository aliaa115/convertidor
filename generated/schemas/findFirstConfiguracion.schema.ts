import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ConfiguracionScalarFieldEnumSchema } from "./enums/ConfiguracionScalarFieldEnum.schema.ts";
import { ConfiguracionIncludeObjectSchema as ConfiguracionIncludeObjectSchema } from "./objects/ConfiguracionInclude.schema.ts";
import { ConfiguracionOrderByWithRelationInputObjectSchema as ConfiguracionOrderByWithRelationInputObjectSchema } from "./objects/ConfiguracionOrderByWithRelationInput.schema.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./objects/ConfiguracionWhereInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./objects/ConfiguracionWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConfiguracionFindFirstSelectSchema: z.ZodType<Prisma.ConfiguracionSelect> =
	z
		.object({
			id: z.boolean().optional(),
			valor: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			usuarioId: z.boolean().optional(),
			usuario: z.boolean().optional(),
			tipoId: z.boolean().optional(),
			tipo: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ConfiguracionSelect>;

export const ConfiguracionFindFirstSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		valor: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		usuarioId: z.boolean().optional(),
		usuario: z.boolean().optional(),
		tipoId: z.boolean().optional(),
		tipo: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
	})
	.strict();

export const ConfiguracionFindFirstSchema: z.ZodType<Prisma.ConfiguracionFindFirstArgs> =
	z
		.object({
			select: ConfiguracionFindFirstSelectSchema.optional(),
			include: z.lazy(() => ConfiguracionIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					ConfiguracionOrderByWithRelationInputObjectSchema,
					ConfiguracionOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: ConfiguracionWhereInputObjectSchema.optional(),
			cursor: ConfiguracionWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					ConfiguracionScalarFieldEnumSchema,
					ConfiguracionScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ConfiguracionFindFirstArgs>;

export const ConfiguracionFindFirstZodSchema = z
	.object({
		select: ConfiguracionFindFirstSelectSchema.optional(),
		include: z.lazy(() => ConfiguracionIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				ConfiguracionOrderByWithRelationInputObjectSchema,
				ConfiguracionOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: ConfiguracionWhereInputObjectSchema.optional(),
		cursor: ConfiguracionWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				ConfiguracionScalarFieldEnumSchema,
				ConfiguracionScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
