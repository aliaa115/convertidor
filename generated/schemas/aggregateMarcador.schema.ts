import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { MarcadorAvgAggregateInputObjectSchema as MarcadorAvgAggregateInputObjectSchema } from "./objects/MarcadorAvgAggregateInput.schema.ts";
import { MarcadorCountAggregateInputObjectSchema as MarcadorCountAggregateInputObjectSchema } from "./objects/MarcadorCountAggregateInput.schema.ts";
import { MarcadorMaxAggregateInputObjectSchema as MarcadorMaxAggregateInputObjectSchema } from "./objects/MarcadorMaxAggregateInput.schema.ts";
import { MarcadorMinAggregateInputObjectSchema as MarcadorMinAggregateInputObjectSchema } from "./objects/MarcadorMinAggregateInput.schema.ts";
import { MarcadorOrderByWithRelationInputObjectSchema as MarcadorOrderByWithRelationInputObjectSchema } from "./objects/MarcadorOrderByWithRelationInput.schema.ts";
import { MarcadorSumAggregateInputObjectSchema as MarcadorSumAggregateInputObjectSchema } from "./objects/MarcadorSumAggregateInput.schema.ts";
import { MarcadorWhereInputObjectSchema as MarcadorWhereInputObjectSchema } from "./objects/MarcadorWhereInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./objects/MarcadorWhereUniqueInput.schema.ts";

export const MarcadorAggregateSchema: z.ZodType<Prisma.MarcadorAggregateArgs> = z
	.object({
		orderBy: z.union([MarcadorOrderByWithRelationInputObjectSchema, MarcadorOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: MarcadorWhereInputObjectSchema.optional(),
		cursor: MarcadorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), MarcadorCountAggregateInputObjectSchema]).optional(),
		_min: MarcadorMinAggregateInputObjectSchema.optional(),
		_max: MarcadorMaxAggregateInputObjectSchema.optional(),
		_avg: MarcadorAvgAggregateInputObjectSchema.optional(),
		_sum: MarcadorSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.MarcadorAggregateArgs>;

export const MarcadorAggregateZodSchema = z
	.object({
		orderBy: z.union([MarcadorOrderByWithRelationInputObjectSchema, MarcadorOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: MarcadorWhereInputObjectSchema.optional(),
		cursor: MarcadorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), MarcadorCountAggregateInputObjectSchema]).optional(),
		_min: MarcadorMinAggregateInputObjectSchema.optional(),
		_max: MarcadorMaxAggregateInputObjectSchema.optional(),
		_avg: MarcadorAvgAggregateInputObjectSchema.optional(),
		_sum: MarcadorSumAggregateInputObjectSchema.optional(),
	})
	.strict();
