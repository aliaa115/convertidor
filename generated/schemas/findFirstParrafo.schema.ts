import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ParrafoScalarFieldEnumSchema } from "./enums/ParrafoScalarFieldEnum.schema.ts";
import { ParrafoIncludeObjectSchema as ParrafoIncludeObjectSchema } from "./objects/ParrafoInclude.schema.ts";
import { ParrafoOrderByWithRelationInputObjectSchema as ParrafoOrderByWithRelationInputObjectSchema } from "./objects/ParrafoOrderByWithRelationInput.schema.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./objects/ParrafoWhereInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./objects/ParrafoWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ParrafoFindFirstSelectSchema: z.ZodType<Prisma.ParrafoSelect> = z
	.object({
		id: z.boolean().optional(),
		contenido: z.boolean().optional(),
		indice: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		capituloId: z.boolean().optional(),
		capitulo: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		comentarios: z.boolean().optional(),
		marcadores: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ParrafoSelect>;

export const ParrafoFindFirstSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		contenido: z.boolean().optional(),
		indice: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		capituloId: z.boolean().optional(),
		capitulo: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		comentarios: z.boolean().optional(),
		marcadores: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict();

export const ParrafoFindFirstSchema: z.ZodType<Prisma.ParrafoFindFirstArgs> = z
	.object({
		select: ParrafoFindFirstSelectSchema.optional(),
		include: z.lazy(() => ParrafoIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				ParrafoOrderByWithRelationInputObjectSchema,
				ParrafoOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: ParrafoWhereInputObjectSchema.optional(),
		cursor: ParrafoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				ParrafoScalarFieldEnumSchema,
				ParrafoScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ParrafoFindFirstArgs>;

export const ParrafoFindFirstZodSchema = z
	.object({
		select: ParrafoFindFirstSelectSchema.optional(),
		include: z.lazy(() => ParrafoIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				ParrafoOrderByWithRelationInputObjectSchema,
				ParrafoOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: ParrafoWhereInputObjectSchema.optional(),
		cursor: ParrafoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				ParrafoScalarFieldEnumSchema,
				ParrafoScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
