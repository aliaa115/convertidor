import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from "./objects/CategoriaWhereInput.schema.ts";

export const CategoriaDeleteManySchema: z.ZodType<Prisma.CategoriaDeleteManyArgs> =
	z
		.object({ where: CategoriaWhereInputObjectSchema.optional() })
		.strict() as unknown as z.ZodType<Prisma.CategoriaDeleteManyArgs>;

export const CategoriaDeleteManyZodSchema = z
	.object({ where: CategoriaWhereInputObjectSchema.optional() })
	.strict();
