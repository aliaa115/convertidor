import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { CapituloIncludeObjectSchema as CapituloIncludeObjectSchema } from "./objects/CapituloInclude.schema.ts";
import { CapituloSelectObjectSchema as CapituloSelectObjectSchema } from "./objects/CapituloSelect.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./objects/CapituloWhereUniqueInput.schema.ts";

export const CapituloDeleteOneSchema: z.ZodType<Prisma.CapituloDeleteArgs> = z
	.object({ select: CapituloSelectObjectSchema.optional(), include: CapituloIncludeObjectSchema.optional(), where: CapituloWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.CapituloDeleteArgs>;

export const CapituloDeleteOneZodSchema = z
	.object({ select: CapituloSelectObjectSchema.optional(), include: CapituloIncludeObjectSchema.optional(), where: CapituloWhereUniqueInputObjectSchema })
	.strict();
