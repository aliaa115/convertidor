import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ParrafoCreateInputObjectSchema as ParrafoCreateInputObjectSchema } from "./objects/ParrafoCreateInput.schema.ts";
import { ParrafoIncludeObjectSchema as ParrafoIncludeObjectSchema } from "./objects/ParrafoInclude.schema.ts";
import { ParrafoSelectObjectSchema as ParrafoSelectObjectSchema } from "./objects/ParrafoSelect.schema.ts";
import { ParrafoUncheckedCreateInputObjectSchema as ParrafoUncheckedCreateInputObjectSchema } from "./objects/ParrafoUncheckedCreateInput.schema.ts";

export const ParrafoCreateOneSchema: z.ZodType<Prisma.ParrafoCreateArgs> = z
	.object({
		select: ParrafoSelectObjectSchema.optional(),
		include: ParrafoIncludeObjectSchema.optional(),
		data: z.union([
			ParrafoCreateInputObjectSchema,
			ParrafoUncheckedCreateInputObjectSchema,
		]),
	})
	.strict() as unknown as z.ZodType<Prisma.ParrafoCreateArgs>;

export const ParrafoCreateOneZodSchema = z
	.object({
		select: ParrafoSelectObjectSchema.optional(),
		include: ParrafoIncludeObjectSchema.optional(),
		data: z.union([
			ParrafoCreateInputObjectSchema,
			ParrafoUncheckedCreateInputObjectSchema,
		]),
	})
	.strict();
