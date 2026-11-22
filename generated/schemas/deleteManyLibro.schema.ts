import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./objects/LibroWhereInput.schema.ts";

export const LibroDeleteManySchema: z.ZodType<Prisma.LibroDeleteManyArgs> = z.object({ where: LibroWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LibroDeleteManyArgs>;

export const LibroDeleteManyZodSchema = z.object({ where: LibroWhereInputObjectSchema.optional() }).strict();
