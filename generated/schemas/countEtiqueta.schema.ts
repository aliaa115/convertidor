import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EtiquetaCountAggregateInputObjectSchema as EtiquetaCountAggregateInputObjectSchema } from "./objects/EtiquetaCountAggregateInput.schema.ts";
import { EtiquetaOrderByWithRelationInputObjectSchema as EtiquetaOrderByWithRelationInputObjectSchema } from "./objects/EtiquetaOrderByWithRelationInput.schema.ts";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./objects/EtiquetaWhereInput.schema.ts";
import { EtiquetaWhereUniqueInputObjectSchema as EtiquetaWhereUniqueInputObjectSchema } from "./objects/EtiquetaWhereUniqueInput.schema.ts";

export const EtiquetaCountSchema: z.ZodType<Prisma.EtiquetaCountArgs> = z
	.object({
		orderBy: z.union([EtiquetaOrderByWithRelationInputObjectSchema, EtiquetaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: EtiquetaWhereInputObjectSchema.optional(),
		cursor: EtiquetaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), EtiquetaCountAggregateInputObjectSchema]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EtiquetaCountArgs>;

export const EtiquetaCountZodSchema = z
	.object({
		orderBy: z.union([EtiquetaOrderByWithRelationInputObjectSchema, EtiquetaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: EtiquetaWhereInputObjectSchema.optional(),
		cursor: EtiquetaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), EtiquetaCountAggregateInputObjectSchema]).optional(),
	})
	.strict();
