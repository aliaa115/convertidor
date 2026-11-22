import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotaAutorScalarFieldEnumSchema } from "./enums/NotaAutorScalarFieldEnum.schema.ts";
import { NotaAutorIncludeObjectSchema as NotaAutorIncludeObjectSchema } from "./objects/NotaAutorInclude.schema.ts";
import { NotaAutorOrderByWithRelationInputObjectSchema as NotaAutorOrderByWithRelationInputObjectSchema } from "./objects/NotaAutorOrderByWithRelationInput.schema.ts";
import { NotaAutorWhereInputObjectSchema as NotaAutorWhereInputObjectSchema } from "./objects/NotaAutorWhereInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./objects/NotaAutorWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NotaAutorFindFirstOrThrowSelectSchema: z.ZodType<Prisma.NotaAutorSelect> =
	z
		.object({
			id: z.boolean().optional(),
			texto: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			escritorId: z.boolean().optional(),
			escritor: z.boolean().optional(),
			capituloId: z.boolean().optional(),
			capitulo: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.NotaAutorSelect>;

export const NotaAutorFindFirstOrThrowSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		texto: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.boolean().optional(),
		capituloId: z.boolean().optional(),
		capitulo: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
	})
	.strict();

export const NotaAutorFindFirstOrThrowSchema: z.ZodType<Prisma.NotaAutorFindFirstOrThrowArgs> =
	z
		.object({
			select: NotaAutorFindFirstOrThrowSelectSchema.optional(),
			include: z.lazy(() => NotaAutorIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					NotaAutorOrderByWithRelationInputObjectSchema,
					NotaAutorOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: NotaAutorWhereInputObjectSchema.optional(),
			cursor: NotaAutorWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					NotaAutorScalarFieldEnumSchema,
					NotaAutorScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.NotaAutorFindFirstOrThrowArgs>;

export const NotaAutorFindFirstOrThrowZodSchema = z
	.object({
		select: NotaAutorFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => NotaAutorIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				NotaAutorOrderByWithRelationInputObjectSchema,
				NotaAutorOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: NotaAutorWhereInputObjectSchema.optional(),
		cursor: NotaAutorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				NotaAutorScalarFieldEnumSchema,
				NotaAutorScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
