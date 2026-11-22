import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			nombre: z.literal(true).optional(),
			url: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const AvatarCountAggregateInputObjectSchema: z.ZodType<Prisma.AvatarCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AvatarCountAggregateInputType>;
export const AvatarCountAggregateInputObjectZodSchema = makeSchema();
