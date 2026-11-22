import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			nombre: z.literal(true).optional(),
			color: z.literal(true).optional(),
			icon: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
		})
		.strict();
export const EstadoMinAggregateInputObjectSchema: z.ZodType<Prisma.EstadoMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EstadoMinAggregateInputType>;
export const EstadoMinAggregateInputObjectZodSchema = makeSchema();
