import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { IdiomaCreateInputObjectSchema as IdiomaCreateInputObjectSchema } from "./objects/IdiomaCreateInput.schema.ts";
import { IdiomaIncludeObjectSchema as IdiomaIncludeObjectSchema } from "./objects/IdiomaInclude.schema.ts";
import { IdiomaSelectObjectSchema as IdiomaSelectObjectSchema } from "./objects/IdiomaSelect.schema.ts";
import { IdiomaUncheckedCreateInputObjectSchema as IdiomaUncheckedCreateInputObjectSchema } from "./objects/IdiomaUncheckedCreateInput.schema.ts";
import { IdiomaUncheckedUpdateInputObjectSchema as IdiomaUncheckedUpdateInputObjectSchema } from "./objects/IdiomaUncheckedUpdateInput.schema.ts";
import { IdiomaUpdateInputObjectSchema as IdiomaUpdateInputObjectSchema } from "./objects/IdiomaUpdateInput.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./objects/IdiomaWhereUniqueInput.schema.ts";

export const IdiomaUpsertOneSchema: z.ZodType<Prisma.IdiomaUpsertArgs> = z
	.object({
		select: IdiomaSelectObjectSchema.optional(),
		include: IdiomaIncludeObjectSchema.optional(),
		where: IdiomaWhereUniqueInputObjectSchema,
		create: z.union([
			IdiomaCreateInputObjectSchema,
			IdiomaUncheckedCreateInputObjectSchema,
		]),
		update: z.union([
			IdiomaUpdateInputObjectSchema,
			IdiomaUncheckedUpdateInputObjectSchema,
		]),
	})
	.strict() as unknown as z.ZodType<Prisma.IdiomaUpsertArgs>;

export const IdiomaUpsertOneZodSchema = z
	.object({
		select: IdiomaSelectObjectSchema.optional(),
		include: IdiomaIncludeObjectSchema.optional(),
		where: IdiomaWhereUniqueInputObjectSchema,
		create: z.union([
			IdiomaCreateInputObjectSchema,
			IdiomaUncheckedCreateInputObjectSchema,
		]),
		update: z.union([
			IdiomaUpdateInputObjectSchema,
			IdiomaUncheckedUpdateInputObjectSchema,
		]),
	})
	.strict();
