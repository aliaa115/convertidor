import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ParrafoIncludeObjectSchema as ParrafoIncludeObjectSchema } from "./objects/ParrafoInclude.schema.ts";
import { ParrafoSelectObjectSchema as ParrafoSelectObjectSchema } from "./objects/ParrafoSelect.schema.ts";
import { ParrafoUncheckedUpdateInputObjectSchema as ParrafoUncheckedUpdateInputObjectSchema } from "./objects/ParrafoUncheckedUpdateInput.schema.ts";
import { ParrafoUpdateInputObjectSchema as ParrafoUpdateInputObjectSchema } from "./objects/ParrafoUpdateInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./objects/ParrafoWhereUniqueInput.schema.ts";

export const ParrafoUpdateOneSchema: z.ZodType<Prisma.ParrafoUpdateArgs> = z
	.object({
		select: ParrafoSelectObjectSchema.optional(),
		include: ParrafoIncludeObjectSchema.optional(),
		data: z.union([ParrafoUpdateInputObjectSchema, ParrafoUncheckedUpdateInputObjectSchema]),
		where: ParrafoWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.ParrafoUpdateArgs>;

export const ParrafoUpdateOneZodSchema = z
	.object({
		select: ParrafoSelectObjectSchema.optional(),
		include: ParrafoIncludeObjectSchema.optional(),
		data: z.union([ParrafoUpdateInputObjectSchema, ParrafoUncheckedUpdateInputObjectSchema]),
		where: ParrafoWhereUniqueInputObjectSchema,
	})
	.strict();
