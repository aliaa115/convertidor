import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { IdiomaIncludeObjectSchema as IdiomaIncludeObjectSchema } from "./objects/IdiomaInclude.schema.ts";
import { IdiomaSelectObjectSchema as IdiomaSelectObjectSchema } from "./objects/IdiomaSelect.schema.ts";
import { IdiomaUncheckedUpdateInputObjectSchema as IdiomaUncheckedUpdateInputObjectSchema } from "./objects/IdiomaUncheckedUpdateInput.schema.ts";
import { IdiomaUpdateInputObjectSchema as IdiomaUpdateInputObjectSchema } from "./objects/IdiomaUpdateInput.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./objects/IdiomaWhereUniqueInput.schema.ts";

export const IdiomaUpdateOneSchema: z.ZodType<Prisma.IdiomaUpdateArgs> = z
	.object({
		select: IdiomaSelectObjectSchema.optional(),
		include: IdiomaIncludeObjectSchema.optional(),
		data: z.union([
			IdiomaUpdateInputObjectSchema,
			IdiomaUncheckedUpdateInputObjectSchema,
		]),
		where: IdiomaWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.IdiomaUpdateArgs>;

export const IdiomaUpdateOneZodSchema = z
	.object({
		select: IdiomaSelectObjectSchema.optional(),
		include: IdiomaIncludeObjectSchema.optional(),
		data: z.union([
			IdiomaUpdateInputObjectSchema,
			IdiomaUncheckedUpdateInputObjectSchema,
		]),
		where: IdiomaWhereUniqueInputObjectSchema,
	})
	.strict();
