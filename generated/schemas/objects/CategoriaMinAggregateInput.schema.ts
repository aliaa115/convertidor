import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			nombre: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const CategoriaMinAggregateInputObjectSchema: z.ZodType<Prisma.CategoriaMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaMinAggregateInputType>;
export const CategoriaMinAggregateInputObjectZodSchema = makeSchema();
