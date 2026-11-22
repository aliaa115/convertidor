import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { CapituloCreateInputObjectSchema as CapituloCreateInputObjectSchema } from "./objects/CapituloCreateInput.schema.ts";
import { CapituloIncludeObjectSchema as CapituloIncludeObjectSchema } from "./objects/CapituloInclude.schema.ts";
import { CapituloSelectObjectSchema as CapituloSelectObjectSchema } from "./objects/CapituloSelect.schema.ts";
import { CapituloUncheckedCreateInputObjectSchema as CapituloUncheckedCreateInputObjectSchema } from "./objects/CapituloUncheckedCreateInput.schema.ts";
import { CapituloUncheckedUpdateInputObjectSchema as CapituloUncheckedUpdateInputObjectSchema } from "./objects/CapituloUncheckedUpdateInput.schema.ts";
import { CapituloUpdateInputObjectSchema as CapituloUpdateInputObjectSchema } from "./objects/CapituloUpdateInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./objects/CapituloWhereUniqueInput.schema.ts";

export const CapituloUpsertOneSchema: z.ZodType<Prisma.CapituloUpsertArgs> = z
	.object({
		select: CapituloSelectObjectSchema.optional(),
		include: CapituloIncludeObjectSchema.optional(),
		where: CapituloWhereUniqueInputObjectSchema,
		create: z.union([CapituloCreateInputObjectSchema, CapituloUncheckedCreateInputObjectSchema]),
		update: z.union([CapituloUpdateInputObjectSchema, CapituloUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.CapituloUpsertArgs>;

export const CapituloUpsertOneZodSchema = z
	.object({
		select: CapituloSelectObjectSchema.optional(),
		include: CapituloIncludeObjectSchema.optional(),
		where: CapituloWhereUniqueInputObjectSchema,
		create: z.union([CapituloCreateInputObjectSchema, CapituloUncheckedCreateInputObjectSchema]),
		update: z.union([CapituloUpdateInputObjectSchema, CapituloUncheckedUpdateInputObjectSchema]),
	})
	.strict();
