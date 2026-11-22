import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
		})
		.strict();
export const AvatarAvgAggregateInputObjectSchema: z.ZodType<Prisma.AvatarAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AvatarAvgAggregateInputType>;
export const AvatarAvgAggregateInputObjectZodSchema = makeSchema();
