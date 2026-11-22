import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { IdiomaCreateManyInputObjectSchema as IdiomaCreateManyInputObjectSchema } from "./objects/IdiomaCreateManyInput.schema.ts";

export const IdiomaCreateManySchema: z.ZodType<Prisma.IdiomaCreateManyArgs> = z
	.object({
		data: z.union([
			IdiomaCreateManyInputObjectSchema,
			z.array(IdiomaCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.IdiomaCreateManyArgs>;

export const IdiomaCreateManyZodSchema = z
	.object({
		data: z.union([
			IdiomaCreateManyInputObjectSchema,
			z.array(IdiomaCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
