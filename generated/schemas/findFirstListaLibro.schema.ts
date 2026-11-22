import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ListaLibroScalarFieldEnumSchema } from "./enums/ListaLibroScalarFieldEnum.schema.ts";
import { ListaLibroIncludeObjectSchema as ListaLibroIncludeObjectSchema } from "./objects/ListaLibroInclude.schema.ts";
import { ListaLibroOrderByWithRelationInputObjectSchema as ListaLibroOrderByWithRelationInputObjectSchema } from "./objects/ListaLibroOrderByWithRelationInput.schema.ts";
import { ListaLibroWhereInputObjectSchema as ListaLibroWhereInputObjectSchema } from "./objects/ListaLibroWhereInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./objects/ListaLibroWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ListaLibroFindFirstSelectSchema: z.ZodType<Prisma.ListaLibroSelect> =
	z
		.object({
			id: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			listaId: z.boolean().optional(),
			lista: z.boolean().optional(),
			libroId: z.boolean().optional(),
			libro: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ListaLibroSelect>;

export const ListaLibroFindFirstSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		listaId: z.boolean().optional(),
		lista: z.boolean().optional(),
		libroId: z.boolean().optional(),
		libro: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
	})
	.strict();

export const ListaLibroFindFirstSchema: z.ZodType<Prisma.ListaLibroFindFirstArgs> =
	z
		.object({
			select: ListaLibroFindFirstSelectSchema.optional(),
			include: z.lazy(() => ListaLibroIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					ListaLibroOrderByWithRelationInputObjectSchema,
					ListaLibroOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: ListaLibroWhereInputObjectSchema.optional(),
			cursor: ListaLibroWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					ListaLibroScalarFieldEnumSchema,
					ListaLibroScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ListaLibroFindFirstArgs>;

export const ListaLibroFindFirstZodSchema = z
	.object({
		select: ListaLibroFindFirstSelectSchema.optional(),
		include: z.lazy(() => ListaLibroIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				ListaLibroOrderByWithRelationInputObjectSchema,
				ListaLibroOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: ListaLibroWhereInputObjectSchema.optional(),
		cursor: ListaLibroWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				ListaLibroScalarFieldEnumSchema,
				ListaLibroScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
