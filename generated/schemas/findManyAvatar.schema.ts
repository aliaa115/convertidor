import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { AvatarScalarFieldEnumSchema } from "./enums/AvatarScalarFieldEnum.schema.ts";
import { AvatarIncludeObjectSchema as AvatarIncludeObjectSchema } from "./objects/AvatarInclude.schema.ts";
import { AvatarOrderByWithRelationInputObjectSchema as AvatarOrderByWithRelationInputObjectSchema } from "./objects/AvatarOrderByWithRelationInput.schema.ts";
import { AvatarWhereInputObjectSchema as AvatarWhereInputObjectSchema } from "./objects/AvatarWhereInput.schema.ts";
import { AvatarWhereUniqueInputObjectSchema as AvatarWhereUniqueInputObjectSchema } from "./objects/AvatarWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AvatarFindManySelectSchema: z.ZodType<Prisma.AvatarSelect> = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		url: z.boolean().optional(),
		escritores: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.AvatarSelect>;

export const AvatarFindManySelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		url: z.boolean().optional(),
		escritores: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict();

export const AvatarFindManySchema: z.ZodType<Prisma.AvatarFindManyArgs> = z
	.object({
		select: AvatarFindManySelectSchema.optional(),
		include: z.lazy(() => AvatarIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				AvatarOrderByWithRelationInputObjectSchema,
				AvatarOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: AvatarWhereInputObjectSchema.optional(),
		cursor: AvatarWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([AvatarScalarFieldEnumSchema, AvatarScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.AvatarFindManyArgs>;

export const AvatarFindManyZodSchema = z
	.object({
		select: AvatarFindManySelectSchema.optional(),
		include: z.lazy(() => AvatarIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				AvatarOrderByWithRelationInputObjectSchema,
				AvatarOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: AvatarWhereInputObjectSchema.optional(),
		cursor: AvatarWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([AvatarScalarFieldEnumSchema, AvatarScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict();
