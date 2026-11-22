import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { MarcadorScalarFieldEnumSchema } from "./enums/MarcadorScalarFieldEnum.schema.ts";
import { MarcadorIncludeObjectSchema as MarcadorIncludeObjectSchema } from "./objects/MarcadorInclude.schema.ts";
import { MarcadorOrderByWithRelationInputObjectSchema as MarcadorOrderByWithRelationInputObjectSchema } from "./objects/MarcadorOrderByWithRelationInput.schema.ts";
import { MarcadorWhereInputObjectSchema as MarcadorWhereInputObjectSchema } from "./objects/MarcadorWhereInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./objects/MarcadorWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MarcadorFindManySelectSchema: z.ZodType<Prisma.MarcadorSelect> = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		color: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.boolean().optional(),
		parrafoId: z.boolean().optional(),
		parrafo: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.MarcadorSelect>;

export const MarcadorFindManySelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		color: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.boolean().optional(),
		parrafoId: z.boolean().optional(),
		parrafo: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
	})
	.strict();

export const MarcadorFindManySchema: z.ZodType<Prisma.MarcadorFindManyArgs> = z
	.object({
		select: MarcadorFindManySelectSchema.optional(),
		include: z.lazy(() => MarcadorIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				MarcadorOrderByWithRelationInputObjectSchema,
				MarcadorOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: MarcadorWhereInputObjectSchema.optional(),
		cursor: MarcadorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				MarcadorScalarFieldEnumSchema,
				MarcadorScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.MarcadorFindManyArgs>;

export const MarcadorFindManyZodSchema = z
	.object({
		select: MarcadorFindManySelectSchema.optional(),
		include: z.lazy(() => MarcadorIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				MarcadorOrderByWithRelationInputObjectSchema,
				MarcadorOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: MarcadorWhereInputObjectSchema.optional(),
		cursor: MarcadorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				MarcadorScalarFieldEnumSchema,
				MarcadorScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
