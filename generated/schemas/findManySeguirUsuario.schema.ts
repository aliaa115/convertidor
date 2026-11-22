import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { SeguirUsuarioScalarFieldEnumSchema } from "./enums/SeguirUsuarioScalarFieldEnum.schema.ts";
import { SeguirUsuarioIncludeObjectSchema as SeguirUsuarioIncludeObjectSchema } from "./objects/SeguirUsuarioInclude.schema.ts";
import { SeguirUsuarioOrderByWithRelationInputObjectSchema as SeguirUsuarioOrderByWithRelationInputObjectSchema } from "./objects/SeguirUsuarioOrderByWithRelationInput.schema.ts";
import { SeguirUsuarioWhereInputObjectSchema as SeguirUsuarioWhereInputObjectSchema } from "./objects/SeguirUsuarioWhereInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./objects/SeguirUsuarioWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SeguirUsuarioFindManySelectSchema: z.ZodType<Prisma.SeguirUsuarioSelect> =
	z
		.object({
			id: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			escritorId: z.boolean().optional(),
			escritor: z.boolean().optional(),
			escritorSeguidoId: z.boolean().optional(),
			seguido: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioSelect>;

export const SeguirUsuarioFindManySelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.boolean().optional(),
		escritorSeguidoId: z.boolean().optional(),
		seguido: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
	})
	.strict();

export const SeguirUsuarioFindManySchema: z.ZodType<Prisma.SeguirUsuarioFindManyArgs> =
	z
		.object({
			select: SeguirUsuarioFindManySelectSchema.optional(),
			include: z.lazy(() => SeguirUsuarioIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					SeguirUsuarioOrderByWithRelationInputObjectSchema,
					SeguirUsuarioOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: SeguirUsuarioWhereInputObjectSchema.optional(),
			cursor: SeguirUsuarioWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					SeguirUsuarioScalarFieldEnumSchema,
					SeguirUsuarioScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioFindManyArgs>;

export const SeguirUsuarioFindManyZodSchema = z
	.object({
		select: SeguirUsuarioFindManySelectSchema.optional(),
		include: z.lazy(() => SeguirUsuarioIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				SeguirUsuarioOrderByWithRelationInputObjectSchema,
				SeguirUsuarioOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: SeguirUsuarioWhereInputObjectSchema.optional(),
		cursor: SeguirUsuarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				SeguirUsuarioScalarFieldEnumSchema,
				SeguirUsuarioScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
