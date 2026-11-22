import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./objects/ParrafoWhereInput.schema.ts";

export const ParrafoDeleteManySchema: z.ZodType<Prisma.ParrafoDeleteManyArgs> = z
	.object({ where: ParrafoWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.ParrafoDeleteManyArgs>;

export const ParrafoDeleteManyZodSchema = z.object({ where: ParrafoWhereInputObjectSchema.optional() }).strict();
