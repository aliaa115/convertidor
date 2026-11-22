import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { AvatarScalarFieldEnumSchema } from "./enums/AvatarScalarFieldEnum.schema.ts";
import { EscritorFindManySchema } from "./findManyEscritor.schema.ts";
import { AvatarCountOutputTypeArgsObjectSchema as AvatarCountOutputTypeArgsObjectSchema } from "./objects/AvatarCountOutputTypeArgs.schema.ts";
import { AvatarIncludeObjectSchema as AvatarIncludeObjectSchema } from "./objects/AvatarInclude.schema.ts";
import { AvatarOrderByWithRelationInputObjectSchema as AvatarOrderByWithRelationInputObjectSchema } from "./objects/AvatarOrderByWithRelationInput.schema.ts";
import { AvatarWhereInputObjectSchema as AvatarWhereInputObjectSchema } from "./objects/AvatarWhereInput.schema.ts";
import { AvatarWhereUniqueInputObjectSchema as AvatarWhereUniqueInputObjectSchema } from "./objects/AvatarWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AvatarFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AvatarSelect> = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		url: z.boolean().optional(),
		escritores: z.union([z.boolean(), z.lazy(() => EscritorFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => AvatarCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.AvatarSelect>;

export const AvatarFindFirstOrThrowSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		url: z.boolean().optional(),
		escritores: z.union([z.boolean(), z.lazy(() => EscritorFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => AvatarCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict();

export const AvatarFindFirstOrThrowSchema: z.ZodType<Prisma.AvatarFindFirstOrThrowArgs> = z
	.object({
		select: AvatarFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => AvatarIncludeObjectSchema.optional()),
		orderBy: z.union([AvatarOrderByWithRelationInputObjectSchema, AvatarOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: AvatarWhereInputObjectSchema.optional(),
		cursor: AvatarWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([AvatarScalarFieldEnumSchema, AvatarScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.AvatarFindFirstOrThrowArgs>;

export const AvatarFindFirstOrThrowZodSchema = z
	.object({
		select: AvatarFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => AvatarIncludeObjectSchema.optional()),
		orderBy: z.union([AvatarOrderByWithRelationInputObjectSchema, AvatarOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: AvatarWhereInputObjectSchema.optional(),
		cursor: AvatarWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([AvatarScalarFieldEnumSchema, AvatarScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
