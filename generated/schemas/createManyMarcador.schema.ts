import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { MarcadorCreateManyInputObjectSchema as MarcadorCreateManyInputObjectSchema } from "./objects/MarcadorCreateManyInput.schema.ts";

export const MarcadorCreateManySchema: z.ZodType<Prisma.MarcadorCreateManyArgs> = z
	.object({ data: z.union([MarcadorCreateManyInputObjectSchema, z.array(MarcadorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.MarcadorCreateManyArgs>;

export const MarcadorCreateManyZodSchema = z
	.object({ data: z.union([MarcadorCreateManyInputObjectSchema, z.array(MarcadorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
