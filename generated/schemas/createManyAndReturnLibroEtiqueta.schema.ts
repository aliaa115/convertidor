import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroEtiquetaCreateManyInputObjectSchema as LibroEtiquetaCreateManyInputObjectSchema } from "./objects/LibroEtiquetaCreateManyInput.schema.ts";
import { LibroEtiquetaSelectObjectSchema as LibroEtiquetaSelectObjectSchema } from "./objects/LibroEtiquetaSelect.schema.ts";

export const LibroEtiquetaCreateManyAndReturnSchema: z.ZodType<Prisma.LibroEtiquetaCreateManyAndReturnArgs> = z
	.object({
		select: LibroEtiquetaSelectObjectSchema.optional(),
		data: z.union([LibroEtiquetaCreateManyInputObjectSchema, z.array(LibroEtiquetaCreateManyInputObjectSchema)]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateManyAndReturnArgs>;

export const LibroEtiquetaCreateManyAndReturnZodSchema = z
	.object({
		select: LibroEtiquetaSelectObjectSchema.optional(),
		data: z.union([LibroEtiquetaCreateManyInputObjectSchema, z.array(LibroEtiquetaCreateManyInputObjectSchema)]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
