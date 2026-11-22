import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			usuarioId: z.number().int().optional(),
		})
		.strict();
export const EscritorWhereUniqueInputObjectSchema: z.ZodType<Prisma.EscritorWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EscritorWhereUniqueInput>;
export const EscritorWhereUniqueInputObjectZodSchema = makeSchema();
