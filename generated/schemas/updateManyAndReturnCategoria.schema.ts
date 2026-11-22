import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from "./objects/CategoriaSelect.schema.ts";
import { CategoriaUpdateManyMutationInputObjectSchema as CategoriaUpdateManyMutationInputObjectSchema } from "./objects/CategoriaUpdateManyMutationInput.schema.ts";
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from "./objects/CategoriaWhereInput.schema.ts";

export const CategoriaUpdateManyAndReturnSchema: z.ZodType<Prisma.CategoriaUpdateManyAndReturnArgs> = z
	.object({ select: CategoriaSelectObjectSchema.optional(), data: CategoriaUpdateManyMutationInputObjectSchema, where: CategoriaWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.CategoriaUpdateManyAndReturnArgs>;

export const CategoriaUpdateManyAndReturnZodSchema = z
	.object({ select: CategoriaSelectObjectSchema.optional(), data: CategoriaUpdateManyMutationInputObjectSchema, where: CategoriaWhereInputObjectSchema.optional() })
	.strict();
