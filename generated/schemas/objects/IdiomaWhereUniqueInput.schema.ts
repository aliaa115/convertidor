import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const IdiomaWhereUniqueInputObjectSchema: z.ZodType<Prisma.IdiomaWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.IdiomaWhereUniqueInput>;
export const IdiomaWhereUniqueInputObjectZodSchema = makeSchema();
