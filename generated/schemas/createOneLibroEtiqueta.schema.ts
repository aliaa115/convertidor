import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroEtiquetaCreateInputObjectSchema as LibroEtiquetaCreateInputObjectSchema } from "./objects/LibroEtiquetaCreateInput.schema.ts";
import { LibroEtiquetaIncludeObjectSchema as LibroEtiquetaIncludeObjectSchema } from "./objects/LibroEtiquetaInclude.schema.ts";
import { LibroEtiquetaSelectObjectSchema as LibroEtiquetaSelectObjectSchema } from "./objects/LibroEtiquetaSelect.schema.ts";
import { LibroEtiquetaUncheckedCreateInputObjectSchema as LibroEtiquetaUncheckedCreateInputObjectSchema } from "./objects/LibroEtiquetaUncheckedCreateInput.schema.ts";

export const LibroEtiquetaCreateOneSchema: z.ZodType<Prisma.LibroEtiquetaCreateArgs> = z
	.object({
		select: LibroEtiquetaSelectObjectSchema.optional(),
		include: LibroEtiquetaIncludeObjectSchema.optional(),
		data: z.union([LibroEtiquetaCreateInputObjectSchema, LibroEtiquetaUncheckedCreateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateArgs>;

export const LibroEtiquetaCreateOneZodSchema = z
	.object({
		select: LibroEtiquetaSelectObjectSchema.optional(),
		include: LibroEtiquetaIncludeObjectSchema.optional(),
		data: z.union([LibroEtiquetaCreateInputObjectSchema, LibroEtiquetaUncheckedCreateInputObjectSchema]),
	})
	.strict();
