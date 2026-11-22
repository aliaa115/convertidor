import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { GlosarioWhereInputObjectSchema as GlosarioWhereInputObjectSchema } from "./objects/GlosarioWhereInput.schema.ts";

export const GlosarioDeleteManySchema: z.ZodType<Prisma.GlosarioDeleteManyArgs> = z
	.object({ where: GlosarioWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.GlosarioDeleteManyArgs>;

export const GlosarioDeleteManyZodSchema = z.object({ where: GlosarioWhereInputObjectSchema.optional() }).strict();
