import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { IdiomaCreateInputObjectSchema as IdiomaCreateInputObjectSchema } from "./objects/IdiomaCreateInput.schema.ts";
import { IdiomaIncludeObjectSchema as IdiomaIncludeObjectSchema } from "./objects/IdiomaInclude.schema.ts";
import { IdiomaSelectObjectSchema as IdiomaSelectObjectSchema } from "./objects/IdiomaSelect.schema.ts";
import { IdiomaUncheckedCreateInputObjectSchema as IdiomaUncheckedCreateInputObjectSchema } from "./objects/IdiomaUncheckedCreateInput.schema.ts";

export const IdiomaCreateOneSchema: z.ZodType<Prisma.IdiomaCreateArgs> = z
	.object({
		select: IdiomaSelectObjectSchema.optional(),
		include: IdiomaIncludeObjectSchema.optional(),
		data: z.union([
			IdiomaCreateInputObjectSchema,
			IdiomaUncheckedCreateInputObjectSchema,
		]),
	})
	.strict() as unknown as z.ZodType<Prisma.IdiomaCreateArgs>;

export const IdiomaCreateOneZodSchema = z
	.object({
		select: IdiomaSelectObjectSchema.optional(),
		include: IdiomaIncludeObjectSchema.optional(),
		data: z.union([
			IdiomaCreateInputObjectSchema,
			IdiomaUncheckedCreateInputObjectSchema,
		]),
	})
	.strict();
