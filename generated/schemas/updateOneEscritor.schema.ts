import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EscritorIncludeObjectSchema as EscritorIncludeObjectSchema } from "./objects/EscritorInclude.schema.ts";
import { EscritorSelectObjectSchema as EscritorSelectObjectSchema } from "./objects/EscritorSelect.schema.ts";
import { EscritorUncheckedUpdateInputObjectSchema as EscritorUncheckedUpdateInputObjectSchema } from "./objects/EscritorUncheckedUpdateInput.schema.ts";
import { EscritorUpdateInputObjectSchema as EscritorUpdateInputObjectSchema } from "./objects/EscritorUpdateInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./objects/EscritorWhereUniqueInput.schema.ts";

export const EscritorUpdateOneSchema: z.ZodType<Prisma.EscritorUpdateArgs> = z
	.object({
		select: EscritorSelectObjectSchema.optional(),
		include: EscritorIncludeObjectSchema.optional(),
		data: z.union([EscritorUpdateInputObjectSchema, EscritorUncheckedUpdateInputObjectSchema]),
		where: EscritorWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.EscritorUpdateArgs>;

export const EscritorUpdateOneZodSchema = z
	.object({
		select: EscritorSelectObjectSchema.optional(),
		include: EscritorIncludeObjectSchema.optional(),
		data: z.union([EscritorUpdateInputObjectSchema, EscritorUncheckedUpdateInputObjectSchema]),
		where: EscritorWhereUniqueInputObjectSchema,
	})
	.strict();
