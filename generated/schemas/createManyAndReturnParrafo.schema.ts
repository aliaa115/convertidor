import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ParrafoCreateManyInputObjectSchema as ParrafoCreateManyInputObjectSchema } from "./objects/ParrafoCreateManyInput.schema.ts";
import { ParrafoSelectObjectSchema as ParrafoSelectObjectSchema } from "./objects/ParrafoSelect.schema.ts";

export const ParrafoCreateManyAndReturnSchema: z.ZodType<Prisma.ParrafoCreateManyAndReturnArgs> = z
	.object({ select: ParrafoSelectObjectSchema.optional(), data: z.union([ParrafoCreateManyInputObjectSchema, z.array(ParrafoCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.ParrafoCreateManyAndReturnArgs>;

export const ParrafoCreateManyAndReturnZodSchema = z
	.object({ select: ParrafoSelectObjectSchema.optional(), data: z.union([ParrafoCreateManyInputObjectSchema, z.array(ParrafoCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
