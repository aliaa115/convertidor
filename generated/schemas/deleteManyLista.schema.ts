import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./objects/ListaWhereInput.schema.ts";

export const ListaDeleteManySchema: z.ZodType<Prisma.ListaDeleteManyArgs> = z.object({ where: ListaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListaDeleteManyArgs>;

export const ListaDeleteManyZodSchema = z.object({ where: ListaWhereInputObjectSchema.optional() }).strict();
