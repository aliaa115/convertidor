import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CapituloCreateInputObjectSchema as CapituloCreateInputObjectSchema } from "./objects/CapituloCreateInput.schema.ts";
import { CapituloIncludeObjectSchema as CapituloIncludeObjectSchema } from "./objects/CapituloInclude.schema.ts";
import { CapituloSelectObjectSchema as CapituloSelectObjectSchema } from "./objects/CapituloSelect.schema.ts";
import { CapituloUncheckedCreateInputObjectSchema as CapituloUncheckedCreateInputObjectSchema } from "./objects/CapituloUncheckedCreateInput.schema.ts";

export const CapituloCreateOneSchema: z.ZodType<Prisma.CapituloCreateArgs> = z
	.object({
		select: CapituloSelectObjectSchema.optional(),
		include: CapituloIncludeObjectSchema.optional(),
		data: z.union([
			CapituloCreateInputObjectSchema,
			CapituloUncheckedCreateInputObjectSchema,
		]),
	})
	.strict() as unknown as z.ZodType<Prisma.CapituloCreateArgs>;

export const CapituloCreateOneZodSchema = z
	.object({
		select: CapituloSelectObjectSchema.optional(),
		include: CapituloIncludeObjectSchema.optional(),
		data: z.union([
			CapituloCreateInputObjectSchema,
			CapituloUncheckedCreateInputObjectSchema,
		]),
	})
	.strict();
