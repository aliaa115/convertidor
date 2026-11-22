import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { IdiomaCreateManyInputObjectSchema as IdiomaCreateManyInputObjectSchema } from "./objects/IdiomaCreateManyInput.schema.ts";
import { IdiomaSelectObjectSchema as IdiomaSelectObjectSchema } from "./objects/IdiomaSelect.schema.ts";

export const IdiomaCreateManyAndReturnSchema: z.ZodType<Prisma.IdiomaCreateManyAndReturnArgs> = z
	.object({ select: IdiomaSelectObjectSchema.optional(), data: z.union([IdiomaCreateManyInputObjectSchema, z.array(IdiomaCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.IdiomaCreateManyAndReturnArgs>;

export const IdiomaCreateManyAndReturnZodSchema = z
	.object({ select: IdiomaSelectObjectSchema.optional(), data: z.union([IdiomaCreateManyInputObjectSchema, z.array(IdiomaCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
