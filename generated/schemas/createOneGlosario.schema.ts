import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { GlosarioCreateInputObjectSchema as GlosarioCreateInputObjectSchema } from "./objects/GlosarioCreateInput.schema.ts";
import { GlosarioIncludeObjectSchema as GlosarioIncludeObjectSchema } from "./objects/GlosarioInclude.schema.ts";
import { GlosarioSelectObjectSchema as GlosarioSelectObjectSchema } from "./objects/GlosarioSelect.schema.ts";
import { GlosarioUncheckedCreateInputObjectSchema as GlosarioUncheckedCreateInputObjectSchema } from "./objects/GlosarioUncheckedCreateInput.schema.ts";

export const GlosarioCreateOneSchema: z.ZodType<Prisma.GlosarioCreateArgs> = z
	.object({
		select: GlosarioSelectObjectSchema.optional(),
		include: GlosarioIncludeObjectSchema.optional(),
		data: z.union([GlosarioCreateInputObjectSchema, GlosarioUncheckedCreateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.GlosarioCreateArgs>;

export const GlosarioCreateOneZodSchema = z
	.object({
		select: GlosarioSelectObjectSchema.optional(),
		include: GlosarioIncludeObjectSchema.optional(),
		data: z.union([GlosarioCreateInputObjectSchema, GlosarioUncheckedCreateInputObjectSchema]),
	})
	.strict();
