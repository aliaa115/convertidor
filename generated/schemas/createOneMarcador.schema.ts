import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { MarcadorCreateInputObjectSchema as MarcadorCreateInputObjectSchema } from "./objects/MarcadorCreateInput.schema.ts";
import { MarcadorIncludeObjectSchema as MarcadorIncludeObjectSchema } from "./objects/MarcadorInclude.schema.ts";
import { MarcadorSelectObjectSchema as MarcadorSelectObjectSchema } from "./objects/MarcadorSelect.schema.ts";
import { MarcadorUncheckedCreateInputObjectSchema as MarcadorUncheckedCreateInputObjectSchema } from "./objects/MarcadorUncheckedCreateInput.schema.ts";

export const MarcadorCreateOneSchema: z.ZodType<Prisma.MarcadorCreateArgs> = z
	.object({
		select: MarcadorSelectObjectSchema.optional(),
		include: MarcadorIncludeObjectSchema.optional(),
		data: z.union([
			MarcadorCreateInputObjectSchema,
			MarcadorUncheckedCreateInputObjectSchema,
		]),
	})
	.strict() as unknown as z.ZodType<Prisma.MarcadorCreateArgs>;

export const MarcadorCreateOneZodSchema = z
	.object({
		select: MarcadorSelectObjectSchema.optional(),
		include: MarcadorIncludeObjectSchema.optional(),
		data: z.union([
			MarcadorCreateInputObjectSchema,
			MarcadorUncheckedCreateInputObjectSchema,
		]),
	})
	.strict();
