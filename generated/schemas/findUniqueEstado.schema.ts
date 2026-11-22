import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EstadoIncludeObjectSchema as EstadoIncludeObjectSchema } from "./objects/EstadoInclude.schema.ts";
import { EstadoSelectObjectSchema as EstadoSelectObjectSchema } from "./objects/EstadoSelect.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./objects/EstadoWhereUniqueInput.schema.ts";

export const EstadoFindUniqueSchema: z.ZodType<Prisma.EstadoFindUniqueArgs> = z
	.object({ select: EstadoSelectObjectSchema.optional(), include: EstadoIncludeObjectSchema.optional(), where: EstadoWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.EstadoFindUniqueArgs>;

export const EstadoFindUniqueZodSchema = z.object({ select: EstadoSelectObjectSchema.optional(), include: EstadoIncludeObjectSchema.optional(), where: EstadoWhereUniqueInputObjectSchema }).strict();
