import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EscritorUpdateManyMutationInputObjectSchema as EscritorUpdateManyMutationInputObjectSchema } from "./objects/EscritorUpdateManyMutationInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./objects/EscritorWhereInput.schema.ts";

export const EscritorUpdateManySchema: z.ZodType<Prisma.EscritorUpdateManyArgs> = z
	.object({ data: EscritorUpdateManyMutationInputObjectSchema, where: EscritorWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.EscritorUpdateManyArgs>;

export const EscritorUpdateManyZodSchema = z.object({ data: EscritorUpdateManyMutationInputObjectSchema, where: EscritorWhereInputObjectSchema.optional() }).strict();
