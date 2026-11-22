import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { MarcadorIncludeObjectSchema as MarcadorIncludeObjectSchema } from "./objects/MarcadorInclude.schema.ts";
import { MarcadorSelectObjectSchema as MarcadorSelectObjectSchema } from "./objects/MarcadorSelect.schema.ts";
import { MarcadorUncheckedUpdateInputObjectSchema as MarcadorUncheckedUpdateInputObjectSchema } from "./objects/MarcadorUncheckedUpdateInput.schema.ts";
import { MarcadorUpdateInputObjectSchema as MarcadorUpdateInputObjectSchema } from "./objects/MarcadorUpdateInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./objects/MarcadorWhereUniqueInput.schema.ts";

export const MarcadorUpdateOneSchema: z.ZodType<Prisma.MarcadorUpdateArgs> = z
	.object({
		select: MarcadorSelectObjectSchema.optional(),
		include: MarcadorIncludeObjectSchema.optional(),
		data: z.union([MarcadorUpdateInputObjectSchema, MarcadorUncheckedUpdateInputObjectSchema]),
		where: MarcadorWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.MarcadorUpdateArgs>;

export const MarcadorUpdateOneZodSchema = z
	.object({
		select: MarcadorSelectObjectSchema.optional(),
		include: MarcadorIncludeObjectSchema.optional(),
		data: z.union([MarcadorUpdateInputObjectSchema, MarcadorUncheckedUpdateInputObjectSchema]),
		where: MarcadorWhereUniqueInputObjectSchema,
	})
	.strict();
