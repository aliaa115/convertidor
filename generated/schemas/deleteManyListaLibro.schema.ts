import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ListaLibroWhereInputObjectSchema as ListaLibroWhereInputObjectSchema } from "./objects/ListaLibroWhereInput.schema.ts";

export const ListaLibroDeleteManySchema: z.ZodType<Prisma.ListaLibroDeleteManyArgs> =
	z
		.object({ where: ListaLibroWhereInputObjectSchema.optional() })
		.strict() as unknown as z.ZodType<Prisma.ListaLibroDeleteManyArgs>;

export const ListaLibroDeleteManyZodSchema = z
	.object({ where: ListaLibroWhereInputObjectSchema.optional() })
	.strict();
