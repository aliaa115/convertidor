import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CategoriaCreateInputObjectSchema as CategoriaCreateInputObjectSchema } from "./objects/CategoriaCreateInput.schema.ts";
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from "./objects/CategoriaInclude.schema.ts";
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from "./objects/CategoriaSelect.schema.ts";
import { CategoriaUncheckedCreateInputObjectSchema as CategoriaUncheckedCreateInputObjectSchema } from "./objects/CategoriaUncheckedCreateInput.schema.ts";

export const CategoriaCreateOneSchema: z.ZodType<Prisma.CategoriaCreateArgs> = z
	.object({
		select: CategoriaSelectObjectSchema.optional(),
		include: CategoriaIncludeObjectSchema.optional(),
		data: z.union([
			CategoriaCreateInputObjectSchema,
			CategoriaUncheckedCreateInputObjectSchema,
		]),
	})
	.strict() as unknown as z.ZodType<Prisma.CategoriaCreateArgs>;

export const CategoriaCreateOneZodSchema = z
	.object({
		select: CategoriaSelectObjectSchema.optional(),
		include: CategoriaIncludeObjectSchema.optional(),
		data: z.union([
			CategoriaCreateInputObjectSchema,
			CategoriaUncheckedCreateInputObjectSchema,
		]),
	})
	.strict();
