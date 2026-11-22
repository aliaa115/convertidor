import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ListaIncludeObjectSchema as ListaIncludeObjectSchema } from "./objects/ListaInclude.schema.ts";
import { ListaSelectObjectSchema as ListaSelectObjectSchema } from "./objects/ListaSelect.schema.ts";
import { ListaUncheckedUpdateInputObjectSchema as ListaUncheckedUpdateInputObjectSchema } from "./objects/ListaUncheckedUpdateInput.schema.ts";
import { ListaUpdateInputObjectSchema as ListaUpdateInputObjectSchema } from "./objects/ListaUpdateInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./objects/ListaWhereUniqueInput.schema.ts";

export const ListaUpdateOneSchema: z.ZodType<Prisma.ListaUpdateArgs> = z
	.object({
		select: ListaSelectObjectSchema.optional(),
		include: ListaIncludeObjectSchema.optional(),
		data: z.union([
			ListaUpdateInputObjectSchema,
			ListaUncheckedUpdateInputObjectSchema,
		]),
		where: ListaWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.ListaUpdateArgs>;

export const ListaUpdateOneZodSchema = z
	.object({
		select: ListaSelectObjectSchema.optional(),
		include: ListaIncludeObjectSchema.optional(),
		data: z.union([
			ListaUpdateInputObjectSchema,
			ListaUncheckedUpdateInputObjectSchema,
		]),
		where: ListaWhereUniqueInputObjectSchema,
	})
	.strict();
