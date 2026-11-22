import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { SeguirUsuarioCreateManyInputObjectSchema as SeguirUsuarioCreateManyInputObjectSchema } from "./objects/SeguirUsuarioCreateManyInput.schema.ts";
import { SeguirUsuarioSelectObjectSchema as SeguirUsuarioSelectObjectSchema } from "./objects/SeguirUsuarioSelect.schema.ts";

export const SeguirUsuarioCreateManyAndReturnSchema: z.ZodType<Prisma.SeguirUsuarioCreateManyAndReturnArgs> = z
	.object({
		select: SeguirUsuarioSelectObjectSchema.optional(),
		data: z.union([SeguirUsuarioCreateManyInputObjectSchema, z.array(SeguirUsuarioCreateManyInputObjectSchema)]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateManyAndReturnArgs>;

export const SeguirUsuarioCreateManyAndReturnZodSchema = z
	.object({
		select: SeguirUsuarioSelectObjectSchema.optional(),
		data: z.union([SeguirUsuarioCreateManyInputObjectSchema, z.array(SeguirUsuarioCreateManyInputObjectSchema)]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
