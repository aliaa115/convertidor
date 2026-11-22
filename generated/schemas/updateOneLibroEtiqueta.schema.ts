import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroEtiquetaIncludeObjectSchema as LibroEtiquetaIncludeObjectSchema } from "./objects/LibroEtiquetaInclude.schema.ts";
import { LibroEtiquetaSelectObjectSchema as LibroEtiquetaSelectObjectSchema } from "./objects/LibroEtiquetaSelect.schema.ts";
import { LibroEtiquetaUncheckedUpdateInputObjectSchema as LibroEtiquetaUncheckedUpdateInputObjectSchema } from "./objects/LibroEtiquetaUncheckedUpdateInput.schema.ts";
import { LibroEtiquetaUpdateInputObjectSchema as LibroEtiquetaUpdateInputObjectSchema } from "./objects/LibroEtiquetaUpdateInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./objects/LibroEtiquetaWhereUniqueInput.schema.ts";

export const LibroEtiquetaUpdateOneSchema: z.ZodType<Prisma.LibroEtiquetaUpdateArgs> = z
	.object({
		select: LibroEtiquetaSelectObjectSchema.optional(),
		include: LibroEtiquetaIncludeObjectSchema.optional(),
		data: z.union([LibroEtiquetaUpdateInputObjectSchema, LibroEtiquetaUncheckedUpdateInputObjectSchema]),
		where: LibroEtiquetaWhereUniqueInputObjectSchema,
	})
	.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateArgs>;

export const LibroEtiquetaUpdateOneZodSchema = z
	.object({
		select: LibroEtiquetaSelectObjectSchema.optional(),
		include: LibroEtiquetaIncludeObjectSchema.optional(),
		data: z.union([LibroEtiquetaUpdateInputObjectSchema, LibroEtiquetaUncheckedUpdateInputObjectSchema]),
		where: LibroEtiquetaWhereUniqueInputObjectSchema,
	})
	.strict();
