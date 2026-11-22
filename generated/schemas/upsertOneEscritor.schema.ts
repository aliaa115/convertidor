import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EscritorCreateInputObjectSchema as EscritorCreateInputObjectSchema } from "./objects/EscritorCreateInput.schema.ts";
import { EscritorIncludeObjectSchema as EscritorIncludeObjectSchema } from "./objects/EscritorInclude.schema.ts";
import { EscritorSelectObjectSchema as EscritorSelectObjectSchema } from "./objects/EscritorSelect.schema.ts";
import { EscritorUncheckedCreateInputObjectSchema as EscritorUncheckedCreateInputObjectSchema } from "./objects/EscritorUncheckedCreateInput.schema.ts";
import { EscritorUncheckedUpdateInputObjectSchema as EscritorUncheckedUpdateInputObjectSchema } from "./objects/EscritorUncheckedUpdateInput.schema.ts";
import { EscritorUpdateInputObjectSchema as EscritorUpdateInputObjectSchema } from "./objects/EscritorUpdateInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./objects/EscritorWhereUniqueInput.schema.ts";

export const EscritorUpsertOneSchema: z.ZodType<Prisma.EscritorUpsertArgs> = z
	.object({
		select: EscritorSelectObjectSchema.optional(),
		include: EscritorIncludeObjectSchema.optional(),
		where: EscritorWhereUniqueInputObjectSchema,
		create: z.union([EscritorCreateInputObjectSchema, EscritorUncheckedCreateInputObjectSchema]),
		update: z.union([EscritorUpdateInputObjectSchema, EscritorUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.EscritorUpsertArgs>;

export const EscritorUpsertOneZodSchema = z
	.object({
		select: EscritorSelectObjectSchema.optional(),
		include: EscritorIncludeObjectSchema.optional(),
		where: EscritorWhereUniqueInputObjectSchema,
		create: z.union([EscritorCreateInputObjectSchema, EscritorUncheckedCreateInputObjectSchema]),
		update: z.union([EscritorUpdateInputObjectSchema, EscritorUncheckedUpdateInputObjectSchema]),
	})
	.strict();
