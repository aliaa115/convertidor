import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { GlosarioCreateInputObjectSchema as GlosarioCreateInputObjectSchema } from "./objects/GlosarioCreateInput.schema.ts";
import { GlosarioIncludeObjectSchema as GlosarioIncludeObjectSchema } from "./objects/GlosarioInclude.schema.ts";
import { GlosarioSelectObjectSchema as GlosarioSelectObjectSchema } from "./objects/GlosarioSelect.schema.ts";
import { GlosarioUncheckedCreateInputObjectSchema as GlosarioUncheckedCreateInputObjectSchema } from "./objects/GlosarioUncheckedCreateInput.schema.ts";
import { GlosarioUncheckedUpdateInputObjectSchema as GlosarioUncheckedUpdateInputObjectSchema } from "./objects/GlosarioUncheckedUpdateInput.schema.ts";
import { GlosarioUpdateInputObjectSchema as GlosarioUpdateInputObjectSchema } from "./objects/GlosarioUpdateInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./objects/GlosarioWhereUniqueInput.schema.ts";

export const GlosarioUpsertOneSchema: z.ZodType<Prisma.GlosarioUpsertArgs> = z
	.object({
		select: GlosarioSelectObjectSchema.optional(),
		include: GlosarioIncludeObjectSchema.optional(),
		where: GlosarioWhereUniqueInputObjectSchema,
		create: z.union([GlosarioCreateInputObjectSchema, GlosarioUncheckedCreateInputObjectSchema]),
		update: z.union([GlosarioUpdateInputObjectSchema, GlosarioUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.GlosarioUpsertArgs>;

export const GlosarioUpsertOneZodSchema = z
	.object({
		select: GlosarioSelectObjectSchema.optional(),
		include: GlosarioIncludeObjectSchema.optional(),
		where: GlosarioWhereUniqueInputObjectSchema,
		create: z.union([GlosarioCreateInputObjectSchema, GlosarioUncheckedCreateInputObjectSchema]),
		update: z.union([GlosarioUpdateInputObjectSchema, GlosarioUncheckedUpdateInputObjectSchema]),
	})
	.strict();
