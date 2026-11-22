import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const GlosarioWhereUniqueInputObjectSchema: z.ZodType<Prisma.GlosarioWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.GlosarioWhereUniqueInput>;
export const GlosarioWhereUniqueInputObjectZodSchema = makeSchema();
