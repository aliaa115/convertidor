import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EscritorIncludeObjectSchema as EscritorIncludeObjectSchema } from "./objects/EscritorInclude.schema.ts";
import { EscritorSelectObjectSchema as EscritorSelectObjectSchema } from "./objects/EscritorSelect.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./objects/EscritorWhereUniqueInput.schema.ts";

export const EscritorFindUniqueSchema: z.ZodType<Prisma.EscritorFindUniqueArgs> = z
	.object({ select: EscritorSelectObjectSchema.optional(), include: EscritorIncludeObjectSchema.optional(), where: EscritorWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.EscritorFindUniqueArgs>;

export const EscritorFindUniqueZodSchema = z
	.object({ select: EscritorSelectObjectSchema.optional(), include: EscritorIncludeObjectSchema.optional(), where: EscritorWhereUniqueInputObjectSchema })
	.strict();
