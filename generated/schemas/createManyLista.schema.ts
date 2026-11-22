import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaCreateManyInputObjectSchema as ListaCreateManyInputObjectSchema } from "./objects/ListaCreateManyInput.schema.ts";

export const ListaCreateManySchema: z.ZodType<Prisma.ListaCreateManyArgs> = z
	.object({ data: z.union([ListaCreateManyInputObjectSchema, z.array(ListaCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.ListaCreateManyArgs>;

export const ListaCreateManyZodSchema = z.object({ data: z.union([ListaCreateManyInputObjectSchema, z.array(ListaCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
