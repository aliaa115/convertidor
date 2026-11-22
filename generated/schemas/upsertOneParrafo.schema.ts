import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ParrafoCreateInputObjectSchema as ParrafoCreateInputObjectSchema } from "./objects/ParrafoCreateInput.schema.ts";
import { ParrafoIncludeObjectSchema as ParrafoIncludeObjectSchema } from "./objects/ParrafoInclude.schema.ts";
import { ParrafoSelectObjectSchema as ParrafoSelectObjectSchema } from "./objects/ParrafoSelect.schema.ts";
import { ParrafoUncheckedCreateInputObjectSchema as ParrafoUncheckedCreateInputObjectSchema } from "./objects/ParrafoUncheckedCreateInput.schema.ts";
import { ParrafoUncheckedUpdateInputObjectSchema as ParrafoUncheckedUpdateInputObjectSchema } from "./objects/ParrafoUncheckedUpdateInput.schema.ts";
import { ParrafoUpdateInputObjectSchema as ParrafoUpdateInputObjectSchema } from "./objects/ParrafoUpdateInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./objects/ParrafoWhereUniqueInput.schema.ts";

export const ParrafoUpsertOneSchema: z.ZodType<Prisma.ParrafoUpsertArgs> = z
	.object({
		select: ParrafoSelectObjectSchema.optional(),
		include: ParrafoIncludeObjectSchema.optional(),
		where: ParrafoWhereUniqueInputObjectSchema,
		create: z.union([ParrafoCreateInputObjectSchema, ParrafoUncheckedCreateInputObjectSchema]),
		update: z.union([ParrafoUpdateInputObjectSchema, ParrafoUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.ParrafoUpsertArgs>;

export const ParrafoUpsertOneZodSchema = z
	.object({
		select: ParrafoSelectObjectSchema.optional(),
		include: ParrafoIncludeObjectSchema.optional(),
		where: ParrafoWhereUniqueInputObjectSchema,
		create: z.union([ParrafoCreateInputObjectSchema, ParrafoUncheckedCreateInputObjectSchema]),
		update: z.union([ParrafoUpdateInputObjectSchema, ParrafoUncheckedUpdateInputObjectSchema]),
	})
	.strict();
