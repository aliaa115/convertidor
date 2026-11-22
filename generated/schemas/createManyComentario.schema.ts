import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ComentarioCreateManyInputObjectSchema as ComentarioCreateManyInputObjectSchema } from "./objects/ComentarioCreateManyInput.schema.ts";

export const ComentarioCreateManySchema: z.ZodType<Prisma.ComentarioCreateManyArgs> = z
	.object({ data: z.union([ComentarioCreateManyInputObjectSchema, z.array(ComentarioCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.ComentarioCreateManyArgs>;

export const ComentarioCreateManyZodSchema = z
	.object({ data: z.union([ComentarioCreateManyInputObjectSchema, z.array(ComentarioCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
