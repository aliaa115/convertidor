import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroEtiquetaCreateManyInputObjectSchema as LibroEtiquetaCreateManyInputObjectSchema } from "./objects/LibroEtiquetaCreateManyInput.schema.ts";

export const LibroEtiquetaCreateManySchema: z.ZodType<Prisma.LibroEtiquetaCreateManyArgs> =
	z
		.object({
			data: z.union([
				LibroEtiquetaCreateManyInputObjectSchema,
				z.array(LibroEtiquetaCreateManyInputObjectSchema),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateManyArgs>;

export const LibroEtiquetaCreateManyZodSchema = z
	.object({
		data: z.union([
			LibroEtiquetaCreateManyInputObjectSchema,
			z.array(LibroEtiquetaCreateManyInputObjectSchema),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
