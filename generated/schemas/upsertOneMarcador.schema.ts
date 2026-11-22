import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { MarcadorCreateInputObjectSchema as MarcadorCreateInputObjectSchema } from "./objects/MarcadorCreateInput.schema.ts";
import { MarcadorIncludeObjectSchema as MarcadorIncludeObjectSchema } from "./objects/MarcadorInclude.schema.ts";
import { MarcadorSelectObjectSchema as MarcadorSelectObjectSchema } from "./objects/MarcadorSelect.schema.ts";
import { MarcadorUncheckedCreateInputObjectSchema as MarcadorUncheckedCreateInputObjectSchema } from "./objects/MarcadorUncheckedCreateInput.schema.ts";
import { MarcadorUncheckedUpdateInputObjectSchema as MarcadorUncheckedUpdateInputObjectSchema } from "./objects/MarcadorUncheckedUpdateInput.schema.ts";
import { MarcadorUpdateInputObjectSchema as MarcadorUpdateInputObjectSchema } from "./objects/MarcadorUpdateInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./objects/MarcadorWhereUniqueInput.schema.ts";

export const MarcadorUpsertOneSchema: z.ZodType<Prisma.MarcadorUpsertArgs> = z
	.object({
		select: MarcadorSelectObjectSchema.optional(),
		include: MarcadorIncludeObjectSchema.optional(),
		where: MarcadorWhereUniqueInputObjectSchema,
		create: z.union([MarcadorCreateInputObjectSchema, MarcadorUncheckedCreateInputObjectSchema]),
		update: z.union([MarcadorUpdateInputObjectSchema, MarcadorUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.MarcadorUpsertArgs>;

export const MarcadorUpsertOneZodSchema = z
	.object({
		select: MarcadorSelectObjectSchema.optional(),
		include: MarcadorIncludeObjectSchema.optional(),
		where: MarcadorWhereUniqueInputObjectSchema,
		create: z.union([MarcadorCreateInputObjectSchema, MarcadorUncheckedCreateInputObjectSchema]),
		update: z.union([MarcadorUpdateInputObjectSchema, MarcadorUncheckedUpdateInputObjectSchema]),
	})
	.strict();
