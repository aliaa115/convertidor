import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ComentarioCreateManyInputObjectSchema as ComentarioCreateManyInputObjectSchema } from "./objects/ComentarioCreateManyInput.schema.ts";
import { ComentarioSelectObjectSchema as ComentarioSelectObjectSchema } from "./objects/ComentarioSelect.schema.ts";

export const ComentarioCreateManyAndReturnSchema: z.ZodType<Prisma.ComentarioCreateManyAndReturnArgs> = z
	.object({
		select: ComentarioSelectObjectSchema.optional(),
		data: z.union([ComentarioCreateManyInputObjectSchema, z.array(ComentarioCreateManyInputObjectSchema)]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ComentarioCreateManyAndReturnArgs>;

export const ComentarioCreateManyAndReturnZodSchema = z
	.object({
		select: ComentarioSelectObjectSchema.optional(),
		data: z.union([ComentarioCreateManyInputObjectSchema, z.array(ComentarioCreateManyInputObjectSchema)]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
