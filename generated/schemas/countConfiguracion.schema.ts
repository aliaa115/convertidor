import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ConfiguracionCountAggregateInputObjectSchema as ConfiguracionCountAggregateInputObjectSchema } from "./objects/ConfiguracionCountAggregateInput.schema.ts";
import { ConfiguracionOrderByWithRelationInputObjectSchema as ConfiguracionOrderByWithRelationInputObjectSchema } from "./objects/ConfiguracionOrderByWithRelationInput.schema.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./objects/ConfiguracionWhereInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./objects/ConfiguracionWhereUniqueInput.schema.ts";

export const ConfiguracionCountSchema: z.ZodType<Prisma.ConfiguracionCountArgs> = z
	.object({
		orderBy: z.union([ConfiguracionOrderByWithRelationInputObjectSchema, ConfiguracionOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ConfiguracionWhereInputObjectSchema.optional(),
		cursor: ConfiguracionWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), ConfiguracionCountAggregateInputObjectSchema]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ConfiguracionCountArgs>;

export const ConfiguracionCountZodSchema = z
	.object({
		orderBy: z.union([ConfiguracionOrderByWithRelationInputObjectSchema, ConfiguracionOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ConfiguracionWhereInputObjectSchema.optional(),
		cursor: ConfiguracionWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), ConfiguracionCountAggregateInputObjectSchema]).optional(),
	})
	.strict();
