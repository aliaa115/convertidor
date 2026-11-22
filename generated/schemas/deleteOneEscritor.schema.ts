import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EscritorIncludeObjectSchema as EscritorIncludeObjectSchema } from "./objects/EscritorInclude.schema.ts";
import { EscritorSelectObjectSchema as EscritorSelectObjectSchema } from "./objects/EscritorSelect.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./objects/EscritorWhereUniqueInput.schema.ts";

export const EscritorDeleteOneSchema: z.ZodType<Prisma.EscritorDeleteArgs> = z
	.object({
		select: EscritorSelectObjectSchema.optional(),
		include: EscritorIncludeObjectSchema.optional(),
		where: EscritorWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.EscritorDeleteArgs>;

export const EscritorDeleteOneZodSchema = z
	.object({
		select: EscritorSelectObjectSchema.optional(),
		include: EscritorIncludeObjectSchema.optional(),
		where: EscritorWhereUniqueInputObjectSchema,
	})
	.strict();
