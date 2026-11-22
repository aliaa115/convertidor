import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { GlosarioIncludeObjectSchema as GlosarioIncludeObjectSchema } from "./objects/GlosarioInclude.schema.ts";
import { GlosarioSelectObjectSchema as GlosarioSelectObjectSchema } from "./objects/GlosarioSelect.schema.ts";
import { GlosarioUncheckedUpdateInputObjectSchema as GlosarioUncheckedUpdateInputObjectSchema } from "./objects/GlosarioUncheckedUpdateInput.schema.ts";
import { GlosarioUpdateInputObjectSchema as GlosarioUpdateInputObjectSchema } from "./objects/GlosarioUpdateInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./objects/GlosarioWhereUniqueInput.schema.ts";

export const GlosarioUpdateOneSchema: z.ZodType<Prisma.GlosarioUpdateArgs> = z
	.object({
		select: GlosarioSelectObjectSchema.optional(),
		include: GlosarioIncludeObjectSchema.optional(),
		data: z.union([GlosarioUpdateInputObjectSchema, GlosarioUncheckedUpdateInputObjectSchema]),
		where: GlosarioWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.GlosarioUpdateArgs>;

export const GlosarioUpdateOneZodSchema = z
	.object({
		select: GlosarioSelectObjectSchema.optional(),
		include: GlosarioIncludeObjectSchema.optional(),
		data: z.union([GlosarioUpdateInputObjectSchema, GlosarioUncheckedUpdateInputObjectSchema]),
		where: GlosarioWhereUniqueInputObjectSchema,
	})
	.strict();
