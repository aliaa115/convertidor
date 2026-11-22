import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaLibroCreateInputObjectSchema as ListaLibroCreateInputObjectSchema } from "./objects/ListaLibroCreateInput.schema.ts";
import { ListaLibroIncludeObjectSchema as ListaLibroIncludeObjectSchema } from "./objects/ListaLibroInclude.schema.ts";
import { ListaLibroSelectObjectSchema as ListaLibroSelectObjectSchema } from "./objects/ListaLibroSelect.schema.ts";
import { ListaLibroUncheckedCreateInputObjectSchema as ListaLibroUncheckedCreateInputObjectSchema } from "./objects/ListaLibroUncheckedCreateInput.schema.ts";

export const ListaLibroCreateOneSchema: z.ZodType<Prisma.ListaLibroCreateArgs> = z
	.object({
		select: ListaLibroSelectObjectSchema.optional(),
		include: ListaLibroIncludeObjectSchema.optional(),
		data: z.union([ListaLibroCreateInputObjectSchema, ListaLibroUncheckedCreateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaLibroCreateArgs>;

export const ListaLibroCreateOneZodSchema = z
	.object({
		select: ListaLibroSelectObjectSchema.optional(),
		include: ListaLibroIncludeObjectSchema.optional(),
		data: z.union([ListaLibroCreateInputObjectSchema, ListaLibroUncheckedCreateInputObjectSchema]),
	})
	.strict();
