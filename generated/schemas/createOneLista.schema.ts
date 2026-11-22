import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaCreateInputObjectSchema as ListaCreateInputObjectSchema } from "./objects/ListaCreateInput.schema.ts";
import { ListaIncludeObjectSchema as ListaIncludeObjectSchema } from "./objects/ListaInclude.schema.ts";
import { ListaSelectObjectSchema as ListaSelectObjectSchema } from "./objects/ListaSelect.schema.ts";
import { ListaUncheckedCreateInputObjectSchema as ListaUncheckedCreateInputObjectSchema } from "./objects/ListaUncheckedCreateInput.schema.ts";

export const ListaCreateOneSchema: z.ZodType<Prisma.ListaCreateArgs> = z
	.object({ select: ListaSelectObjectSchema.optional(), include: ListaIncludeObjectSchema.optional(), data: z.union([ListaCreateInputObjectSchema, ListaUncheckedCreateInputObjectSchema]) })
	.strict() as unknown as z.ZodType<Prisma.ListaCreateArgs>;

export const ListaCreateOneZodSchema = z
	.object({ select: ListaSelectObjectSchema.optional(), include: ListaIncludeObjectSchema.optional(), data: z.union([ListaCreateInputObjectSchema, ListaUncheckedCreateInputObjectSchema]) })
	.strict();
