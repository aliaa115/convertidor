import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ListaScalarFieldEnumSchema } from "./enums/ListaScalarFieldEnum.schema.ts";
import { ListaIncludeObjectSchema as ListaIncludeObjectSchema } from "./objects/ListaInclude.schema.ts";
import { ListaOrderByWithRelationInputObjectSchema as ListaOrderByWithRelationInputObjectSchema } from "./objects/ListaOrderByWithRelationInput.schema.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./objects/ListaWhereInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./objects/ListaWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ListaFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ListaSelect> =
	z
		.object({
			id: z.boolean().optional(),
			nombre: z.boolean().optional(),
			privada: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			usuarioId: z.boolean().optional(),
			usuario: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z.boolean().optional(),
			libros: z.boolean().optional(),
			_count: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ListaSelect>;

export const ListaFindFirstOrThrowSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		privada: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		usuarioId: z.boolean().optional(),
		usuario: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		libros: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict();

export const ListaFindFirstOrThrowSchema: z.ZodType<Prisma.ListaFindFirstOrThrowArgs> =
	z
		.object({
			select: ListaFindFirstOrThrowSelectSchema.optional(),
			include: z.lazy(() => ListaIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					ListaOrderByWithRelationInputObjectSchema,
					ListaOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: ListaWhereInputObjectSchema.optional(),
			cursor: ListaWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([ListaScalarFieldEnumSchema, ListaScalarFieldEnumSchema.array()])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ListaFindFirstOrThrowArgs>;

export const ListaFindFirstOrThrowZodSchema = z
	.object({
		select: ListaFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => ListaIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				ListaOrderByWithRelationInputObjectSchema,
				ListaOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: ListaWhereInputObjectSchema.optional(),
		cursor: ListaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([ListaScalarFieldEnumSchema, ListaScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict();
