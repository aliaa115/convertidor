import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EscritorCreateInputObjectSchema as EscritorCreateInputObjectSchema } from "./objects/EscritorCreateInput.schema.ts";
import { EscritorIncludeObjectSchema as EscritorIncludeObjectSchema } from "./objects/EscritorInclude.schema.ts";
import { EscritorSelectObjectSchema as EscritorSelectObjectSchema } from "./objects/EscritorSelect.schema.ts";
import { EscritorUncheckedCreateInputObjectSchema as EscritorUncheckedCreateInputObjectSchema } from "./objects/EscritorUncheckedCreateInput.schema.ts";

export const EscritorCreateOneSchema: z.ZodType<Prisma.EscritorCreateArgs> = z
	.object({
		select: EscritorSelectObjectSchema.optional(),
		include: EscritorIncludeObjectSchema.optional(),
		data: z.union([EscritorCreateInputObjectSchema, EscritorUncheckedCreateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.EscritorCreateArgs>;

export const EscritorCreateOneZodSchema = z
	.object({
		select: EscritorSelectObjectSchema.optional(),
		include: EscritorIncludeObjectSchema.optional(),
		data: z.union([EscritorCreateInputObjectSchema, EscritorUncheckedCreateInputObjectSchema]),
	})
	.strict();
