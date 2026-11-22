import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaLibroCreateInputObjectSchema as ListaLibroCreateInputObjectSchema } from "./objects/ListaLibroCreateInput.schema.ts";
import { ListaLibroIncludeObjectSchema as ListaLibroIncludeObjectSchema } from "./objects/ListaLibroInclude.schema.ts";
import { ListaLibroSelectObjectSchema as ListaLibroSelectObjectSchema } from "./objects/ListaLibroSelect.schema.ts";
import { ListaLibroUncheckedCreateInputObjectSchema as ListaLibroUncheckedCreateInputObjectSchema } from "./objects/ListaLibroUncheckedCreateInput.schema.ts";
import { ListaLibroUncheckedUpdateInputObjectSchema as ListaLibroUncheckedUpdateInputObjectSchema } from "./objects/ListaLibroUncheckedUpdateInput.schema.ts";
import { ListaLibroUpdateInputObjectSchema as ListaLibroUpdateInputObjectSchema } from "./objects/ListaLibroUpdateInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./objects/ListaLibroWhereUniqueInput.schema.ts";

export const ListaLibroUpsertOneSchema: z.ZodType<Prisma.ListaLibroUpsertArgs> = z
	.object({
		select: ListaLibroSelectObjectSchema.optional(),
		include: ListaLibroIncludeObjectSchema.optional(),
		where: ListaLibroWhereUniqueInputObjectSchema,
		create: z.union([ListaLibroCreateInputObjectSchema, ListaLibroUncheckedCreateInputObjectSchema]),
		update: z.union([ListaLibroUpdateInputObjectSchema, ListaLibroUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaLibroUpsertArgs>;

export const ListaLibroUpsertOneZodSchema = z
	.object({
		select: ListaLibroSelectObjectSchema.optional(),
		include: ListaLibroIncludeObjectSchema.optional(),
		where: ListaLibroWhereUniqueInputObjectSchema,
		create: z.union([ListaLibroCreateInputObjectSchema, ListaLibroUncheckedCreateInputObjectSchema]),
		update: z.union([ListaLibroUpdateInputObjectSchema, ListaLibroUncheckedUpdateInputObjectSchema]),
	})
	.strict();
