import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroCategoriaCreateInputObjectSchema as LibroCategoriaCreateInputObjectSchema } from "./objects/LibroCategoriaCreateInput.schema.ts";
import { LibroCategoriaIncludeObjectSchema as LibroCategoriaIncludeObjectSchema } from "./objects/LibroCategoriaInclude.schema.ts";
import { LibroCategoriaSelectObjectSchema as LibroCategoriaSelectObjectSchema } from "./objects/LibroCategoriaSelect.schema.ts";
import { LibroCategoriaUncheckedCreateInputObjectSchema as LibroCategoriaUncheckedCreateInputObjectSchema } from "./objects/LibroCategoriaUncheckedCreateInput.schema.ts";
import { LibroCategoriaUncheckedUpdateInputObjectSchema as LibroCategoriaUncheckedUpdateInputObjectSchema } from "./objects/LibroCategoriaUncheckedUpdateInput.schema.ts";
import { LibroCategoriaUpdateInputObjectSchema as LibroCategoriaUpdateInputObjectSchema } from "./objects/LibroCategoriaUpdateInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./objects/LibroCategoriaWhereUniqueInput.schema.ts";

export const LibroCategoriaUpsertOneSchema: z.ZodType<Prisma.LibroCategoriaUpsertArgs> = z
	.object({
		select: LibroCategoriaSelectObjectSchema.optional(),
		include: LibroCategoriaIncludeObjectSchema.optional(),
		where: LibroCategoriaWhereUniqueInputObjectSchema,
		create: z.union([LibroCategoriaCreateInputObjectSchema, LibroCategoriaUncheckedCreateInputObjectSchema]),
		update: z.union([LibroCategoriaUpdateInputObjectSchema, LibroCategoriaUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroCategoriaUpsertArgs>;

export const LibroCategoriaUpsertOneZodSchema = z
	.object({
		select: LibroCategoriaSelectObjectSchema.optional(),
		include: LibroCategoriaIncludeObjectSchema.optional(),
		where: LibroCategoriaWhereUniqueInputObjectSchema,
		create: z.union([LibroCategoriaCreateInputObjectSchema, LibroCategoriaUncheckedCreateInputObjectSchema]),
		update: z.union([LibroCategoriaUpdateInputObjectSchema, LibroCategoriaUncheckedUpdateInputObjectSchema]),
	})
	.strict();
