import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { MarcadorIncludeObjectSchema as MarcadorIncludeObjectSchema } from "./objects/MarcadorInclude.schema.ts";
import { MarcadorSelectObjectSchema as MarcadorSelectObjectSchema } from "./objects/MarcadorSelect.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./objects/MarcadorWhereUniqueInput.schema.ts";

export const MarcadorDeleteOneSchema: z.ZodType<Prisma.MarcadorDeleteArgs> = z
	.object({ select: MarcadorSelectObjectSchema.optional(), include: MarcadorIncludeObjectSchema.optional(), where: MarcadorWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.MarcadorDeleteArgs>;

export const MarcadorDeleteOneZodSchema = z
	.object({ select: MarcadorSelectObjectSchema.optional(), include: MarcadorIncludeObjectSchema.optional(), where: MarcadorWhereUniqueInputObjectSchema })
	.strict();
