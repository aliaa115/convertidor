import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from "./objects/CategoriaInclude.schema.ts";
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from "./objects/CategoriaSelect.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./objects/CategoriaWhereUniqueInput.schema.ts";

export const CategoriaFindUniqueSchema: z.ZodType<Prisma.CategoriaFindUniqueArgs> = z
	.object({ select: CategoriaSelectObjectSchema.optional(), include: CategoriaIncludeObjectSchema.optional(), where: CategoriaWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.CategoriaFindUniqueArgs>;

export const CategoriaFindUniqueZodSchema = z
	.object({ select: CategoriaSelectObjectSchema.optional(), include: CategoriaIncludeObjectSchema.optional(), where: CategoriaWhereUniqueInputObjectSchema })
	.strict();
