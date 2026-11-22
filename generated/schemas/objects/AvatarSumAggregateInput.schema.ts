import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
		})
		.strict();
export const AvatarSumAggregateInputObjectSchema: z.ZodType<Prisma.AvatarSumAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarSumAggregateInputType>;
export const AvatarSumAggregateInputObjectZodSchema = makeSchema();
