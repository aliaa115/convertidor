import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CategoriaCreateInputObjectSchema as CategoriaCreateInputObjectSchema } from "./objects/CategoriaCreateInput.schema.ts";
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from "./objects/CategoriaInclude.schema.ts";
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from "./objects/CategoriaSelect.schema.ts";
import { CategoriaUncheckedCreateInputObjectSchema as CategoriaUncheckedCreateInputObjectSchema } from "./objects/CategoriaUncheckedCreateInput.schema.ts";
import { CategoriaUncheckedUpdateInputObjectSchema as CategoriaUncheckedUpdateInputObjectSchema } from "./objects/CategoriaUncheckedUpdateInput.schema.ts";
import { CategoriaUpdateInputObjectSchema as CategoriaUpdateInputObjectSchema } from "./objects/CategoriaUpdateInput.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./objects/CategoriaWhereUniqueInput.schema.ts";

export const CategoriaUpsertOneSchema: z.ZodType<Prisma.CategoriaUpsertArgs> = z
	.object({
		select: CategoriaSelectObjectSchema.optional(),
		include: CategoriaIncludeObjectSchema.optional(),
		where: CategoriaWhereUniqueInputObjectSchema,
		create: z.union([
			CategoriaCreateInputObjectSchema,
			CategoriaUncheckedCreateInputObjectSchema,
		]),
		update: z.union([
			CategoriaUpdateInputObjectSchema,
			CategoriaUncheckedUpdateInputObjectSchema,
		]),
	})
	.strict() as unknown as z.ZodType<Prisma.CategoriaUpsertArgs>;

export const CategoriaUpsertOneZodSchema = z
	.object({
		select: CategoriaSelectObjectSchema.optional(),
		include: CategoriaIncludeObjectSchema.optional(),
		where: CategoriaWhereUniqueInputObjectSchema,
		create: z.union([
			CategoriaCreateInputObjectSchema,
			CategoriaUncheckedCreateInputObjectSchema,
		]),
		update: z.union([
			CategoriaUpdateInputObjectSchema,
			CategoriaUncheckedUpdateInputObjectSchema,
		]),
	})
	.strict();
