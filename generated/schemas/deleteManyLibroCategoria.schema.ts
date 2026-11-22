import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroCategoriaWhereInputObjectSchema as LibroCategoriaWhereInputObjectSchema } from "./objects/LibroCategoriaWhereInput.schema.ts";

export const LibroCategoriaDeleteManySchema: z.ZodType<Prisma.LibroCategoriaDeleteManyArgs> = z
	.object({ where: LibroCategoriaWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.LibroCategoriaDeleteManyArgs>;

export const LibroCategoriaDeleteManyZodSchema = z.object({ where: LibroCategoriaWhereInputObjectSchema.optional() }).strict();
