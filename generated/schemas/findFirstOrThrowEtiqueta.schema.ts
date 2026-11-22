import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EtiquetaScalarFieldEnumSchema } from "./enums/EtiquetaScalarFieldEnum.schema.ts";
import { EtiquetaIncludeObjectSchema as EtiquetaIncludeObjectSchema } from "./objects/EtiquetaInclude.schema.ts";
import { EtiquetaOrderByWithRelationInputObjectSchema as EtiquetaOrderByWithRelationInputObjectSchema } from "./objects/EtiquetaOrderByWithRelationInput.schema.ts";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./objects/EtiquetaWhereInput.schema.ts";
import { EtiquetaWhereUniqueInputObjectSchema as EtiquetaWhereUniqueInputObjectSchema } from "./objects/EtiquetaWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EtiquetaFindFirstOrThrowSelectSchema: z.ZodType<Prisma.EtiquetaSelect> =
	z
		.object({
			id: z.boolean().optional(),
			nombre: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z.boolean().optional(),
			libros: z.boolean().optional(),
			_count: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.EtiquetaSelect>;

export const EtiquetaFindFirstOrThrowSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		libros: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict();

export const EtiquetaFindFirstOrThrowSchema: z.ZodType<Prisma.EtiquetaFindFirstOrThrowArgs> =
	z
		.object({
			select: EtiquetaFindFirstOrThrowSelectSchema.optional(),
			include: z.lazy(() => EtiquetaIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					EtiquetaOrderByWithRelationInputObjectSchema,
					EtiquetaOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: EtiquetaWhereInputObjectSchema.optional(),
			cursor: EtiquetaWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					EtiquetaScalarFieldEnumSchema,
					EtiquetaScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.EtiquetaFindFirstOrThrowArgs>;

export const EtiquetaFindFirstOrThrowZodSchema = z
	.object({
		select: EtiquetaFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => EtiquetaIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				EtiquetaOrderByWithRelationInputObjectSchema,
				EtiquetaOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: EtiquetaWhereInputObjectSchema.optional(),
		cursor: EtiquetaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				EtiquetaScalarFieldEnumSchema,
				EtiquetaScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
