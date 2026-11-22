import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroCategoriaSelectObjectSchema as LibroCategoriaSelectObjectSchema } from "./objects/LibroCategoriaSelect.schema.ts";
import { LibroCategoriaUpdateManyMutationInputObjectSchema as LibroCategoriaUpdateManyMutationInputObjectSchema } from "./objects/LibroCategoriaUpdateManyMutationInput.schema.ts";
import { LibroCategoriaWhereInputObjectSchema as LibroCategoriaWhereInputObjectSchema } from "./objects/LibroCategoriaWhereInput.schema.ts";

export const LibroCategoriaUpdateManyAndReturnSchema: z.ZodType<Prisma.LibroCategoriaUpdateManyAndReturnArgs> = z
	.object({ select: LibroCategoriaSelectObjectSchema.optional(), data: LibroCategoriaUpdateManyMutationInputObjectSchema, where: LibroCategoriaWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.LibroCategoriaUpdateManyAndReturnArgs>;

export const LibroCategoriaUpdateManyAndReturnZodSchema = z
	.object({ select: LibroCategoriaSelectObjectSchema.optional(), data: LibroCategoriaUpdateManyMutationInputObjectSchema, where: LibroCategoriaWhereInputObjectSchema.optional() })
	.strict();
