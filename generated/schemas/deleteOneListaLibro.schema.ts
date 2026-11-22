import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ListaLibroIncludeObjectSchema as ListaLibroIncludeObjectSchema } from "./objects/ListaLibroInclude.schema.ts";
import { ListaLibroSelectObjectSchema as ListaLibroSelectObjectSchema } from "./objects/ListaLibroSelect.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./objects/ListaLibroWhereUniqueInput.schema.ts";

export const ListaLibroDeleteOneSchema: z.ZodType<Prisma.ListaLibroDeleteArgs> =
	z
		.object({
			select: ListaLibroSelectObjectSchema.optional(),
			include: ListaLibroIncludeObjectSchema.optional(),
			where: ListaLibroWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.ListaLibroDeleteArgs>;

export const ListaLibroDeleteOneZodSchema = z
	.object({
		select: ListaLibroSelectObjectSchema.optional(),
		include: ListaLibroIncludeObjectSchema.optional(),
		where: ListaLibroWhereUniqueInputObjectSchema,
	})
	.strict();
