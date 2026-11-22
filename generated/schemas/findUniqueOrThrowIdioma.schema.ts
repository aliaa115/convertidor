import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { IdiomaIncludeObjectSchema as IdiomaIncludeObjectSchema } from "./objects/IdiomaInclude.schema.ts";
import { IdiomaSelectObjectSchema as IdiomaSelectObjectSchema } from "./objects/IdiomaSelect.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./objects/IdiomaWhereUniqueInput.schema.ts";

export const IdiomaFindUniqueOrThrowSchema: z.ZodType<Prisma.IdiomaFindUniqueOrThrowArgs> = z
	.object({ select: IdiomaSelectObjectSchema.optional(), include: IdiomaIncludeObjectSchema.optional(), where: IdiomaWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.IdiomaFindUniqueOrThrowArgs>;

export const IdiomaFindUniqueOrThrowZodSchema = z
	.object({ select: IdiomaSelectObjectSchema.optional(), include: IdiomaIncludeObjectSchema.optional(), where: IdiomaWhereUniqueInputObjectSchema })
	.strict();
