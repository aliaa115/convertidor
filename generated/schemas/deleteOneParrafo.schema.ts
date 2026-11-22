import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ParrafoIncludeObjectSchema as ParrafoIncludeObjectSchema } from "./objects/ParrafoInclude.schema.ts";
import { ParrafoSelectObjectSchema as ParrafoSelectObjectSchema } from "./objects/ParrafoSelect.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./objects/ParrafoWhereUniqueInput.schema.ts";

export const ParrafoDeleteOneSchema: z.ZodType<Prisma.ParrafoDeleteArgs> = z
	.object({ select: ParrafoSelectObjectSchema.optional(), include: ParrafoIncludeObjectSchema.optional(), where: ParrafoWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.ParrafoDeleteArgs>;

export const ParrafoDeleteOneZodSchema = z
	.object({ select: ParrafoSelectObjectSchema.optional(), include: ParrafoIncludeObjectSchema.optional(), where: ParrafoWhereUniqueInputObjectSchema })
	.strict();
