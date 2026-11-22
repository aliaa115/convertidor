import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const CapituloWhereUniqueInputObjectSchema: z.ZodType<Prisma.CapituloWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CapituloWhereUniqueInput>;
export const CapituloWhereUniqueInputObjectZodSchema = makeSchema();
