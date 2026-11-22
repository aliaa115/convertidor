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
export const AvatarMaxAggregateInputObjectSchema: z.ZodType<Prisma.AvatarMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AvatarMaxAggregateInputType>;
export const AvatarMaxAggregateInputObjectZodSchema = makeSchema();
