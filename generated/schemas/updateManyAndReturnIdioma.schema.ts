import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { IdiomaSelectObjectSchema as IdiomaSelectObjectSchema } from "./objects/IdiomaSelect.schema.ts";
import { IdiomaUpdateManyMutationInputObjectSchema as IdiomaUpdateManyMutationInputObjectSchema } from "./objects/IdiomaUpdateManyMutationInput.schema.ts";
import { IdiomaWhereInputObjectSchema as IdiomaWhereInputObjectSchema } from "./objects/IdiomaWhereInput.schema.ts";

export const IdiomaUpdateManyAndReturnSchema: z.ZodType<Prisma.IdiomaUpdateManyAndReturnArgs> = z
	.object({ select: IdiomaSelectObjectSchema.optional(), data: IdiomaUpdateManyMutationInputObjectSchema, where: IdiomaWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.IdiomaUpdateManyAndReturnArgs>;

export const IdiomaUpdateManyAndReturnZodSchema = z
	.object({ select: IdiomaSelectObjectSchema.optional(), data: IdiomaUpdateManyMutationInputObjectSchema, where: IdiomaWhereInputObjectSchema.optional() })
	.strict();
