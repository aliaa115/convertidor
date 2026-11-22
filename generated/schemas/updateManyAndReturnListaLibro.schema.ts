import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ListaLibroSelectObjectSchema as ListaLibroSelectObjectSchema } from "./objects/ListaLibroSelect.schema.ts";
import { ListaLibroUpdateManyMutationInputObjectSchema as ListaLibroUpdateManyMutationInputObjectSchema } from "./objects/ListaLibroUpdateManyMutationInput.schema.ts";
import { ListaLibroWhereInputObjectSchema as ListaLibroWhereInputObjectSchema } from "./objects/ListaLibroWhereInput.schema.ts";

export const ListaLibroUpdateManyAndReturnSchema: z.ZodType<Prisma.ListaLibroUpdateManyAndReturnArgs> =
	z
		.object({
			select: ListaLibroSelectObjectSchema.optional(),
			data: ListaLibroUpdateManyMutationInputObjectSchema,
			where: ListaLibroWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ListaLibroUpdateManyAndReturnArgs>;

export const ListaLibroUpdateManyAndReturnZodSchema = z
	.object({
		select: ListaLibroSelectObjectSchema.optional(),
		data: ListaLibroUpdateManyMutationInputObjectSchema,
		where: ListaLibroWhereInputObjectSchema.optional(),
	})
	.strict();
