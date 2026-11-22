import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroCategoriaCreateManyInputObjectSchema as LibroCategoriaCreateManyInputObjectSchema } from "./objects/LibroCategoriaCreateManyInput.schema.ts";
import { LibroCategoriaSelectObjectSchema as LibroCategoriaSelectObjectSchema } from "./objects/LibroCategoriaSelect.schema.ts";

export const LibroCategoriaCreateManyAndReturnSchema: z.ZodType<Prisma.LibroCategoriaCreateManyAndReturnArgs> =
	z
		.object({
			select: LibroCategoriaSelectObjectSchema.optional(),
			data: z.union([
				LibroCategoriaCreateManyInputObjectSchema,
				z.array(LibroCategoriaCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.LibroCategoriaCreateManyAndReturnArgs>;

export const LibroCategoriaCreateManyAndReturnZodSchema = z
	.object({
		select: LibroCategoriaSelectObjectSchema.optional(),
		data: z.union([
			LibroCategoriaCreateManyInputObjectSchema,
			z.array(LibroCategoriaCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
