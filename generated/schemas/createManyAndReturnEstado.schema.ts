import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EstadoCreateManyInputObjectSchema as EstadoCreateManyInputObjectSchema } from "./objects/EstadoCreateManyInput.schema.ts";
import { EstadoSelectObjectSchema as EstadoSelectObjectSchema } from "./objects/EstadoSelect.schema.ts";

export const EstadoCreateManyAndReturnSchema: z.ZodType<Prisma.EstadoCreateManyAndReturnArgs> = z
	.object({ select: EstadoSelectObjectSchema.optional(), data: z.union([EstadoCreateManyInputObjectSchema, z.array(EstadoCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.EstadoCreateManyAndReturnArgs>;

export const EstadoCreateManyAndReturnZodSchema = z
	.object({ select: EstadoSelectObjectSchema.optional(), data: z.union([EstadoCreateManyInputObjectSchema, z.array(EstadoCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
