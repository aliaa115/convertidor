import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { GlosarioScalarFieldEnumSchema } from "./enums/GlosarioScalarFieldEnum.schema.ts";
import { GlosarioIncludeObjectSchema as GlosarioIncludeObjectSchema } from "./objects/GlosarioInclude.schema.ts";
import { GlosarioOrderByWithRelationInputObjectSchema as GlosarioOrderByWithRelationInputObjectSchema } from "./objects/GlosarioOrderByWithRelationInput.schema.ts";
import { GlosarioWhereInputObjectSchema as GlosarioWhereInputObjectSchema } from "./objects/GlosarioWhereInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./objects/GlosarioWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GlosarioFindFirstSelectSchema: z.ZodType<Prisma.GlosarioSelect> = z
	.object({
		id: z.boolean().optional(),
		palabra: z.boolean().optional(),
		significado: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		libroId: z.boolean().optional(),
		libro: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.GlosarioSelect>;

export const GlosarioFindFirstSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		palabra: z.boolean().optional(),
		significado: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		libroId: z.boolean().optional(),
		libro: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
	})
	.strict();

export const GlosarioFindFirstSchema: z.ZodType<Prisma.GlosarioFindFirstArgs> =
	z
		.object({
			select: GlosarioFindFirstSelectSchema.optional(),
			include: z.lazy(() => GlosarioIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					GlosarioOrderByWithRelationInputObjectSchema,
					GlosarioOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: GlosarioWhereInputObjectSchema.optional(),
			cursor: GlosarioWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					GlosarioScalarFieldEnumSchema,
					GlosarioScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.GlosarioFindFirstArgs>;

export const GlosarioFindFirstZodSchema = z
	.object({
		select: GlosarioFindFirstSelectSchema.optional(),
		include: z.lazy(() => GlosarioIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				GlosarioOrderByWithRelationInputObjectSchema,
				GlosarioOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: GlosarioWhereInputObjectSchema.optional(),
		cursor: GlosarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				GlosarioScalarFieldEnumSchema,
				GlosarioScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
