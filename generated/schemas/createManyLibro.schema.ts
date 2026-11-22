import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroCreateManyInputObjectSchema as LibroCreateManyInputObjectSchema } from "./objects/LibroCreateManyInput.schema.ts";

export const LibroCreateManySchema: z.ZodType<Prisma.LibroCreateManyArgs> = z
	.object({ data: z.union([LibroCreateManyInputObjectSchema, z.array(LibroCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.LibroCreateManyArgs>;

export const LibroCreateManyZodSchema = z.object({ data: z.union([LibroCreateManyInputObjectSchema, z.array(LibroCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
