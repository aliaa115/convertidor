import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EscritorCreateManyInputObjectSchema as EscritorCreateManyInputObjectSchema } from "./objects/EscritorCreateManyInput.schema.ts";

export const EscritorCreateManySchema: z.ZodType<Prisma.EscritorCreateManyArgs> = z
	.object({ data: z.union([EscritorCreateManyInputObjectSchema, z.array(EscritorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.EscritorCreateManyArgs>;

export const EscritorCreateManyZodSchema = z
	.object({ data: z.union([EscritorCreateManyInputObjectSchema, z.array(EscritorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
