import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from "./objects/CategoriaInclude.schema.ts";
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from "./objects/CategoriaSelect.schema.ts";
import { CategoriaUncheckedUpdateInputObjectSchema as CategoriaUncheckedUpdateInputObjectSchema } from "./objects/CategoriaUncheckedUpdateInput.schema.ts";
import { CategoriaUpdateInputObjectSchema as CategoriaUpdateInputObjectSchema } from "./objects/CategoriaUpdateInput.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./objects/CategoriaWhereUniqueInput.schema.ts";

export const CategoriaUpdateOneSchema: z.ZodType<Prisma.CategoriaUpdateArgs> = z
	.object({
		select: CategoriaSelectObjectSchema.optional(),
		include: CategoriaIncludeObjectSchema.optional(),
		data: z.union([
			CategoriaUpdateInputObjectSchema,
			CategoriaUncheckedUpdateInputObjectSchema,
		]),
		where: CategoriaWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.CategoriaUpdateArgs>;

export const CategoriaUpdateOneZodSchema = z
	.object({
		select: CategoriaSelectObjectSchema.optional(),
		include: CategoriaIncludeObjectSchema.optional(),
		data: z.union([
			CategoriaUpdateInputObjectSchema,
			CategoriaUncheckedUpdateInputObjectSchema,
		]),
		where: CategoriaWhereUniqueInputObjectSchema,
	})
	.strict();
