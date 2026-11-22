import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaLibroUpdateManyMutationInputObjectSchema as ListaLibroUpdateManyMutationInputObjectSchema } from "./objects/ListaLibroUpdateManyMutationInput.schema.ts";
import { ListaLibroWhereInputObjectSchema as ListaLibroWhereInputObjectSchema } from "./objects/ListaLibroWhereInput.schema.ts";

export const ListaLibroUpdateManySchema: z.ZodType<Prisma.ListaLibroUpdateManyArgs> = z
	.object({ data: ListaLibroUpdateManyMutationInputObjectSchema, where: ListaLibroWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.ListaLibroUpdateManyArgs>;

export const ListaLibroUpdateManyZodSchema = z.object({ data: ListaLibroUpdateManyMutationInputObjectSchema, where: ListaLibroWhereInputObjectSchema.optional() }).strict();
