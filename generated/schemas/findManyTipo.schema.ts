import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { TipoScalarFieldEnumSchema } from "./enums/TipoScalarFieldEnum.schema.ts";
import { TipoIncludeObjectSchema as TipoIncludeObjectSchema } from "./objects/TipoInclude.schema.ts";
import { TipoOrderByWithRelationInputObjectSchema as TipoOrderByWithRelationInputObjectSchema } from "./objects/TipoOrderByWithRelationInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./objects/TipoWhereInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./objects/TipoWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TipoFindManySelectSchema: z.ZodType<Prisma.TipoSelect> = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		tabla: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		configuraciones: z.boolean().optional(),
		libros: z.boolean().optional(),
		comentarios: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.TipoSelect>;

export const TipoFindManySelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		tabla: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		configuraciones: z.boolean().optional(),
		libros: z.boolean().optional(),
		comentarios: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict();

export const TipoFindManySchema: z.ZodType<Prisma.TipoFindManyArgs> = z
	.object({
		select: TipoFindManySelectSchema.optional(),
		include: z.lazy(() => TipoIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				TipoOrderByWithRelationInputObjectSchema,
				TipoOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: TipoWhereInputObjectSchema.optional(),
		cursor: TipoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([TipoScalarFieldEnumSchema, TipoScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.TipoFindManyArgs>;

export const TipoFindManyZodSchema = z
	.object({
		select: TipoFindManySelectSchema.optional(),
		include: z.lazy(() => TipoIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				TipoOrderByWithRelationInputObjectSchema,
				TipoOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: TipoWhereInputObjectSchema.optional(),
		cursor: TipoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([TipoScalarFieldEnumSchema, TipoScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict();
