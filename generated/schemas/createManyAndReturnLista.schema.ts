import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaCreateManyInputObjectSchema as ListaCreateManyInputObjectSchema } from "./objects/ListaCreateManyInput.schema.ts";
import { ListaSelectObjectSchema as ListaSelectObjectSchema } from "./objects/ListaSelect.schema.ts";

export const ListaCreateManyAndReturnSchema: z.ZodType<Prisma.ListaCreateManyAndReturnArgs> = z
	.object({ select: ListaSelectObjectSchema.optional(), data: z.union([ListaCreateManyInputObjectSchema, z.array(ListaCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.ListaCreateManyAndReturnArgs>;

export const ListaCreateManyAndReturnZodSchema = z
	.object({ select: ListaSelectObjectSchema.optional(), data: z.union([ListaCreateManyInputObjectSchema, z.array(ListaCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
