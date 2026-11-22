import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroCategoriaCreateManyInputObjectSchema as LibroCategoriaCreateManyInputObjectSchema } from "./objects/LibroCategoriaCreateManyInput.schema.ts";

export const LibroCategoriaCreateManySchema: z.ZodType<Prisma.LibroCategoriaCreateManyArgs> =
	z
		.object({
			data: z.union([
				LibroCategoriaCreateManyInputObjectSchema,
				z.array(LibroCategoriaCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.LibroCategoriaCreateManyArgs>;

export const LibroCategoriaCreateManyZodSchema = z
	.object({
		data: z.union([
			LibroCategoriaCreateManyInputObjectSchema,
			z.array(LibroCategoriaCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
