import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { CapituloIncludeObjectSchema as CapituloIncludeObjectSchema } from "./objects/CapituloInclude.schema.ts";
import { CapituloSelectObjectSchema as CapituloSelectObjectSchema } from "./objects/CapituloSelect.schema.ts";
import { CapituloUncheckedUpdateInputObjectSchema as CapituloUncheckedUpdateInputObjectSchema } from "./objects/CapituloUncheckedUpdateInput.schema.ts";
import { CapituloUpdateInputObjectSchema as CapituloUpdateInputObjectSchema } from "./objects/CapituloUpdateInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./objects/CapituloWhereUniqueInput.schema.ts";

export const CapituloUpdateOneSchema: z.ZodType<Prisma.CapituloUpdateArgs> = z
	.object({
		select: CapituloSelectObjectSchema.optional(),
		include: CapituloIncludeObjectSchema.optional(),
		data: z.union([CapituloUpdateInputObjectSchema, CapituloUncheckedUpdateInputObjectSchema]),
		where: CapituloWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.CapituloUpdateArgs>;

export const CapituloUpdateOneZodSchema = z
	.object({
		select: CapituloSelectObjectSchema.optional(),
		include: CapituloIncludeObjectSchema.optional(),
		data: z.union([CapituloUpdateInputObjectSchema, CapituloUncheckedUpdateInputObjectSchema]),
		where: CapituloWhereUniqueInputObjectSchema,
	})
	.strict();
