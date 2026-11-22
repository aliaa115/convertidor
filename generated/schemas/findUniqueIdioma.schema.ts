import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { IdiomaIncludeObjectSchema as IdiomaIncludeObjectSchema } from "./objects/IdiomaInclude.schema.ts";
import { IdiomaSelectObjectSchema as IdiomaSelectObjectSchema } from "./objects/IdiomaSelect.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./objects/IdiomaWhereUniqueInput.schema.ts";

export const IdiomaFindUniqueSchema: z.ZodType<Prisma.IdiomaFindUniqueArgs> = z
	.object({
		select: IdiomaSelectObjectSchema.optional(),
		include: IdiomaIncludeObjectSchema.optional(),
		where: IdiomaWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.IdiomaFindUniqueArgs>;

export const IdiomaFindUniqueZodSchema = z
	.object({
		select: IdiomaSelectObjectSchema.optional(),
		include: IdiomaIncludeObjectSchema.optional(),
		where: IdiomaWhereUniqueInputObjectSchema,
	})
	.strict();
