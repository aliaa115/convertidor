import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EtiquetaCreateManyInputObjectSchema as EtiquetaCreateManyInputObjectSchema } from "./objects/EtiquetaCreateManyInput.schema.ts";
import { EtiquetaSelectObjectSchema as EtiquetaSelectObjectSchema } from "./objects/EtiquetaSelect.schema.ts";

export const EtiquetaCreateManyAndReturnSchema: z.ZodType<Prisma.EtiquetaCreateManyAndReturnArgs> = z
	.object({ select: EtiquetaSelectObjectSchema.optional(), data: z.union([EtiquetaCreateManyInputObjectSchema, z.array(EtiquetaCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.EtiquetaCreateManyAndReturnArgs>;

export const EtiquetaCreateManyAndReturnZodSchema = z
	.object({ select: EtiquetaSelectObjectSchema.optional(), data: z.union([EtiquetaCreateManyInputObjectSchema, z.array(EtiquetaCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
