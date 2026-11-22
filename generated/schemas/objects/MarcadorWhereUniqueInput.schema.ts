import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const MarcadorWhereUniqueInputObjectSchema: z.ZodType<Prisma.MarcadorWhereUniqueInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorWhereUniqueInput>;
export const MarcadorWhereUniqueInputObjectZodSchema = makeSchema();
