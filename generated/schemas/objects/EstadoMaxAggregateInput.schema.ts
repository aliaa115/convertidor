import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

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
export const EstadoMaxAggregateInputObjectSchema: z.ZodType<Prisma.EstadoMaxAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoMaxAggregateInputType>;
export const EstadoMaxAggregateInputObjectZodSchema = makeSchema();
