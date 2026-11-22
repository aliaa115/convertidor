import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroCreateManyInputObjectSchema as LibroCreateManyInputObjectSchema } from "./objects/LibroCreateManyInput.schema.ts";
import { LibroSelectObjectSchema as LibroSelectObjectSchema } from "./objects/LibroSelect.schema.ts";

export const LibroCreateManyAndReturnSchema: z.ZodType<Prisma.LibroCreateManyAndReturnArgs> =
	z
		.object({
			select: LibroSelectObjectSchema.optional(),
			data: z.union([
				LibroCreateManyInputObjectSchema,
				z.array(LibroCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.LibroCreateManyAndReturnArgs>;

export const LibroCreateManyAndReturnZodSchema = z
	.object({
		select: LibroSelectObjectSchema.optional(),
		data: z.union([
			LibroCreateManyInputObjectSchema,
			z.array(LibroCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
