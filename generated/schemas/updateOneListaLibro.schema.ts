import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ListaLibroIncludeObjectSchema as ListaLibroIncludeObjectSchema } from "./objects/ListaLibroInclude.schema.ts";
import { ListaLibroSelectObjectSchema as ListaLibroSelectObjectSchema } from "./objects/ListaLibroSelect.schema.ts";
import { ListaLibroUncheckedUpdateInputObjectSchema as ListaLibroUncheckedUpdateInputObjectSchema } from "./objects/ListaLibroUncheckedUpdateInput.schema.ts";
import { ListaLibroUpdateInputObjectSchema as ListaLibroUpdateInputObjectSchema } from "./objects/ListaLibroUpdateInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./objects/ListaLibroWhereUniqueInput.schema.ts";

export const ListaLibroUpdateOneSchema: z.ZodType<Prisma.ListaLibroUpdateArgs> =
	z
		.object({
			select: ListaLibroSelectObjectSchema.optional(),
			include: ListaLibroIncludeObjectSchema.optional(),
			data: z.union([
				ListaLibroUpdateInputObjectSchema,
				ListaLibroUncheckedUpdateInputObjectSchema,
			]),
			where: ListaLibroWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.ListaLibroUpdateArgs>;

export const ListaLibroUpdateOneZodSchema = z
	.object({
		select: ListaLibroSelectObjectSchema.optional(),
		include: ListaLibroIncludeObjectSchema.optional(),
		data: z.union([
			ListaLibroUpdateInputObjectSchema,
			ListaLibroUncheckedUpdateInputObjectSchema,
		]),
		where: ListaLibroWhereUniqueInputObjectSchema,
	})
	.strict();
