import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./objects/EscritorWhereInput.schema.ts";

export const EscritorDeleteManySchema: z.ZodType<Prisma.EscritorDeleteManyArgs> = z
	.object({ where: EscritorWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.EscritorDeleteManyArgs>;

export const EscritorDeleteManyZodSchema = z.object({ where: EscritorWhereInputObjectSchema.optional() }).strict();
