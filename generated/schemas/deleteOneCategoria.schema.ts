import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from "./objects/CategoriaInclude.schema.ts";
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from "./objects/CategoriaSelect.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./objects/CategoriaWhereUniqueInput.schema.ts";

export const CategoriaDeleteOneSchema: z.ZodType<Prisma.CategoriaDeleteArgs> = z
	.object({
		select: CategoriaSelectObjectSchema.optional(),
		include: CategoriaIncludeObjectSchema.optional(),
		where: CategoriaWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.CategoriaDeleteArgs>;

export const CategoriaDeleteOneZodSchema = z
	.object({
		select: CategoriaSelectObjectSchema.optional(),
		include: CategoriaIncludeObjectSchema.optional(),
		where: CategoriaWhereUniqueInputObjectSchema,
	})
	.strict();
