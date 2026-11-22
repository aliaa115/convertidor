import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaIncludeObjectSchema as ListaIncludeObjectSchema } from "./objects/ListaInclude.schema.ts";
import { ListaSelectObjectSchema as ListaSelectObjectSchema } from "./objects/ListaSelect.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./objects/ListaWhereUniqueInput.schema.ts";

export const ListaFindUniqueOrThrowSchema: z.ZodType<Prisma.ListaFindUniqueOrThrowArgs> = z
	.object({ select: ListaSelectObjectSchema.optional(), include: ListaIncludeObjectSchema.optional(), where: ListaWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.ListaFindUniqueOrThrowArgs>;

export const ListaFindUniqueOrThrowZodSchema = z
	.object({ select: ListaSelectObjectSchema.optional(), include: ListaIncludeObjectSchema.optional(), where: ListaWhereUniqueInputObjectSchema })
	.strict();
