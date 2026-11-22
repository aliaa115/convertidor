import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EscritorCreateManyInputObjectSchema as EscritorCreateManyInputObjectSchema } from "./objects/EscritorCreateManyInput.schema.ts";
import { EscritorSelectObjectSchema as EscritorSelectObjectSchema } from "./objects/EscritorSelect.schema.ts";

export const EscritorCreateManyAndReturnSchema: z.ZodType<Prisma.EscritorCreateManyAndReturnArgs> = z
	.object({ select: EscritorSelectObjectSchema.optional(), data: z.union([EscritorCreateManyInputObjectSchema, z.array(EscritorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.EscritorCreateManyAndReturnArgs>;

export const EscritorCreateManyAndReturnZodSchema = z
	.object({ select: EscritorSelectObjectSchema.optional(), data: z.union([EscritorCreateManyInputObjectSchema, z.array(EscritorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
