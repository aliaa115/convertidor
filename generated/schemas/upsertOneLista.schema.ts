import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaCreateInputObjectSchema as ListaCreateInputObjectSchema } from "./objects/ListaCreateInput.schema.ts";
import { ListaIncludeObjectSchema as ListaIncludeObjectSchema } from "./objects/ListaInclude.schema.ts";
import { ListaSelectObjectSchema as ListaSelectObjectSchema } from "./objects/ListaSelect.schema.ts";
import { ListaUncheckedCreateInputObjectSchema as ListaUncheckedCreateInputObjectSchema } from "./objects/ListaUncheckedCreateInput.schema.ts";
import { ListaUncheckedUpdateInputObjectSchema as ListaUncheckedUpdateInputObjectSchema } from "./objects/ListaUncheckedUpdateInput.schema.ts";
import { ListaUpdateInputObjectSchema as ListaUpdateInputObjectSchema } from "./objects/ListaUpdateInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./objects/ListaWhereUniqueInput.schema.ts";

export const ListaUpsertOneSchema: z.ZodType<Prisma.ListaUpsertArgs> = z
	.object({
		select: ListaSelectObjectSchema.optional(),
		include: ListaIncludeObjectSchema.optional(),
		where: ListaWhereUniqueInputObjectSchema,
		create: z.union([ListaCreateInputObjectSchema, ListaUncheckedCreateInputObjectSchema]),
		update: z.union([ListaUpdateInputObjectSchema, ListaUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaUpsertArgs>;

export const ListaUpsertOneZodSchema = z
	.object({
		select: ListaSelectObjectSchema.optional(),
		include: ListaIncludeObjectSchema.optional(),
		where: ListaWhereUniqueInputObjectSchema,
		create: z.union([ListaCreateInputObjectSchema, ListaUncheckedCreateInputObjectSchema]),
		update: z.union([ListaUpdateInputObjectSchema, ListaUncheckedUpdateInputObjectSchema]),
	})
	.strict();
