import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaSelectObjectSchema as ListaSelectObjectSchema } from "./objects/ListaSelect.schema.ts";
import { ListaUpdateManyMutationInputObjectSchema as ListaUpdateManyMutationInputObjectSchema } from "./objects/ListaUpdateManyMutationInput.schema.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./objects/ListaWhereInput.schema.ts";

export const ListaUpdateManyAndReturnSchema: z.ZodType<Prisma.ListaUpdateManyAndReturnArgs> = z
	.object({ select: ListaSelectObjectSchema.optional(), data: ListaUpdateManyMutationInputObjectSchema, where: ListaWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.ListaUpdateManyAndReturnArgs>;

export const ListaUpdateManyAndReturnZodSchema = z
	.object({ select: ListaSelectObjectSchema.optional(), data: ListaUpdateManyMutationInputObjectSchema, where: ListaWhereInputObjectSchema.optional() })
	.strict();
