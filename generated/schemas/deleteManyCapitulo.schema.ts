import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./objects/CapituloWhereInput.schema.ts";

export const CapituloDeleteManySchema: z.ZodType<Prisma.CapituloDeleteManyArgs> = z
	.object({ where: CapituloWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.CapituloDeleteManyArgs>;

export const CapituloDeleteManyZodSchema = z.object({ where: CapituloWhereInputObjectSchema.optional() }).strict();
