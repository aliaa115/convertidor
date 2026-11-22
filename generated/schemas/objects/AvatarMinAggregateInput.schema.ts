import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			nombre: z.literal(true).optional(),
			url: z.literal(true).optional(),
		})
		.strict();
export const AvatarMinAggregateInputObjectSchema: z.ZodType<Prisma.AvatarMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AvatarMinAggregateInputType>;
export const AvatarMinAggregateInputObjectZodSchema = makeSchema();
