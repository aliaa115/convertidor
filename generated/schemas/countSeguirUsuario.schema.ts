import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { SeguirUsuarioCountAggregateInputObjectSchema as SeguirUsuarioCountAggregateInputObjectSchema } from "./objects/SeguirUsuarioCountAggregateInput.schema.ts";
import { SeguirUsuarioOrderByWithRelationInputObjectSchema as SeguirUsuarioOrderByWithRelationInputObjectSchema } from "./objects/SeguirUsuarioOrderByWithRelationInput.schema.ts";
import { SeguirUsuarioWhereInputObjectSchema as SeguirUsuarioWhereInputObjectSchema } from "./objects/SeguirUsuarioWhereInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./objects/SeguirUsuarioWhereUniqueInput.schema.ts";

export const SeguirUsuarioCountSchema: z.ZodType<Prisma.SeguirUsuarioCountArgs> =
	z
		.object({
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
			select: z
				.union([z.literal(true), SeguirUsuarioCountAggregateInputObjectSchema])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioCountArgs>;

export const SeguirUsuarioCountZodSchema = z
	.object({
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
		select: z
			.union([z.literal(true), SeguirUsuarioCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict();
