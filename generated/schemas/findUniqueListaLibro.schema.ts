import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ListaLibroIncludeObjectSchema as ListaLibroIncludeObjectSchema } from "./objects/ListaLibroInclude.schema.ts";
import { ListaLibroSelectObjectSchema as ListaLibroSelectObjectSchema } from "./objects/ListaLibroSelect.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./objects/ListaLibroWhereUniqueInput.schema.ts";

export const ListaLibroFindUniqueSchema: z.ZodType<Prisma.ListaLibroFindUniqueArgs> =
	z
		.object({
			select: ListaLibroSelectObjectSchema.optional(),
			include: ListaLibroIncludeObjectSchema.optional(),
			where: ListaLibroWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.ListaLibroFindUniqueArgs>;

export const ListaLibroFindUniqueZodSchema = z
	.object({
		select: ListaLibroSelectObjectSchema.optional(),
		include: ListaLibroIncludeObjectSchema.optional(),
		where: ListaLibroWhereUniqueInputObjectSchema,
	})
	.strict();
