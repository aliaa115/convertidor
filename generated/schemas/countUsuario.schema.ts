import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { UsuarioCountAggregateInputObjectSchema as UsuarioCountAggregateInputObjectSchema } from "./objects/UsuarioCountAggregateInput.schema.ts";
import { UsuarioOrderByWithRelationInputObjectSchema as UsuarioOrderByWithRelationInputObjectSchema } from "./objects/UsuarioOrderByWithRelationInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./objects/UsuarioWhereInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./objects/UsuarioWhereUniqueInput.schema.ts";

export const UsuarioCountSchema: z.ZodType<Prisma.UsuarioCountArgs> = z
	.object({
		orderBy: z
			.union([
				UsuarioOrderByWithRelationInputObjectSchema,
				UsuarioOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: UsuarioWhereInputObjectSchema.optional(),
		cursor: UsuarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), UsuarioCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.UsuarioCountArgs>;

export const UsuarioCountZodSchema = z
	.object({
		orderBy: z
			.union([
				UsuarioOrderByWithRelationInputObjectSchema,
				UsuarioOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: UsuarioWhereInputObjectSchema.optional(),
		cursor: UsuarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), UsuarioCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict();
