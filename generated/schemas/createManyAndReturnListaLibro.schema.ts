import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaLibroCreateManyInputObjectSchema as ListaLibroCreateManyInputObjectSchema } from "./objects/ListaLibroCreateManyInput.schema.ts";
import { ListaLibroSelectObjectSchema as ListaLibroSelectObjectSchema } from "./objects/ListaLibroSelect.schema.ts";

export const ListaLibroCreateManyAndReturnSchema: z.ZodType<Prisma.ListaLibroCreateManyAndReturnArgs> = z
	.object({
		select: ListaLibroSelectObjectSchema.optional(),
		data: z.union([ListaLibroCreateManyInputObjectSchema, z.array(ListaLibroCreateManyInputObjectSchema)]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaLibroCreateManyAndReturnArgs>;

export const ListaLibroCreateManyAndReturnZodSchema = z
	.object({
		select: ListaLibroSelectObjectSchema.optional(),
		data: z.union([ListaLibroCreateManyInputObjectSchema, z.array(ListaLibroCreateManyInputObjectSchema)]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
