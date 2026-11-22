import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { MarcadorCreateManyInputObjectSchema as MarcadorCreateManyInputObjectSchema } from "./objects/MarcadorCreateManyInput.schema.ts";
import { MarcadorSelectObjectSchema as MarcadorSelectObjectSchema } from "./objects/MarcadorSelect.schema.ts";

export const MarcadorCreateManyAndReturnSchema: z.ZodType<Prisma.MarcadorCreateManyAndReturnArgs> = z
	.object({ select: MarcadorSelectObjectSchema.optional(), data: z.union([MarcadorCreateManyInputObjectSchema, z.array(MarcadorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.MarcadorCreateManyAndReturnArgs>;

export const MarcadorCreateManyAndReturnZodSchema = z
	.object({ select: MarcadorSelectObjectSchema.optional(), data: z.union([MarcadorCreateManyInputObjectSchema, z.array(MarcadorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
