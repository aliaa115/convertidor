import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ComentarioScalarFieldEnumSchema } from "./enums/ComentarioScalarFieldEnum.schema.ts";
import { ComentarioIncludeObjectSchema as ComentarioIncludeObjectSchema } from "./objects/ComentarioInclude.schema.ts";
import { ComentarioOrderByWithRelationInputObjectSchema as ComentarioOrderByWithRelationInputObjectSchema } from "./objects/ComentarioOrderByWithRelationInput.schema.ts";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./objects/ComentarioWhereInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./objects/ComentarioWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ComentarioFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ComentarioSelect> =
	z
		.object({
			id: z.boolean().optional(),
			contenido: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			escritorId: z.boolean().optional(),
			escritor: z.boolean().optional(),
			parrafoId: z.boolean().optional(),
			parrafo: z.boolean().optional(),
			comentarioPadreId: z.boolean().optional(),
			padre: z.boolean().optional(),
			respuestas: z.boolean().optional(),
			tipoId: z.boolean().optional(),
			tipo: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z.boolean().optional(),
			_count: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ComentarioSelect>;

export const ComentarioFindFirstOrThrowSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		contenido: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.boolean().optional(),
		parrafoId: z.boolean().optional(),
		parrafo: z.boolean().optional(),
		comentarioPadreId: z.boolean().optional(),
		padre: z.boolean().optional(),
		respuestas: z.boolean().optional(),
		tipoId: z.boolean().optional(),
		tipo: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict();

export const ComentarioFindFirstOrThrowSchema: z.ZodType<Prisma.ComentarioFindFirstOrThrowArgs> =
	z
		.object({
			select: ComentarioFindFirstOrThrowSelectSchema.optional(),
			include: z.lazy(() => ComentarioIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					ComentarioOrderByWithRelationInputObjectSchema,
					ComentarioOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: ComentarioWhereInputObjectSchema.optional(),
			cursor: ComentarioWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					ComentarioScalarFieldEnumSchema,
					ComentarioScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ComentarioFindFirstOrThrowArgs>;

export const ComentarioFindFirstOrThrowZodSchema = z
	.object({
		select: ComentarioFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => ComentarioIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				ComentarioOrderByWithRelationInputObjectSchema,
				ComentarioOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: ComentarioWhereInputObjectSchema.optional(),
		cursor: ComentarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				ComentarioScalarFieldEnumSchema,
				ComentarioScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
