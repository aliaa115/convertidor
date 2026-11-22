import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { TipoCountAggregateInputObjectSchema as TipoCountAggregateInputObjectSchema } from "./objects/TipoCountAggregateInput.schema.ts";
import { TipoOrderByWithRelationInputObjectSchema as TipoOrderByWithRelationInputObjectSchema } from "./objects/TipoOrderByWithRelationInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./objects/TipoWhereInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./objects/TipoWhereUniqueInput.schema.ts";

export const TipoCountSchema: z.ZodType<Prisma.TipoCountArgs> = z
	.object({
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
		select: z
			.union([z.literal(true), TipoCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.TipoCountArgs>;

export const TipoCountZodSchema = z
	.object({
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
		select: z
			.union([z.literal(true), TipoCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict();
