import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ComentarioIncludeObjectSchema as ComentarioIncludeObjectSchema } from "./objects/ComentarioInclude.schema.ts";
import { ComentarioSelectObjectSchema as ComentarioSelectObjectSchema } from "./objects/ComentarioSelect.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./objects/ComentarioWhereUniqueInput.schema.ts";

export const ComentarioDeleteOneSchema: z.ZodType<Prisma.ComentarioDeleteArgs> = z
	.object({ select: ComentarioSelectObjectSchema.optional(), include: ComentarioIncludeObjectSchema.optional(), where: ComentarioWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.ComentarioDeleteArgs>;

export const ComentarioDeleteOneZodSchema = z
	.object({ select: ComentarioSelectObjectSchema.optional(), include: ComentarioIncludeObjectSchema.optional(), where: ComentarioWhereUniqueInputObjectSchema })
	.strict();
