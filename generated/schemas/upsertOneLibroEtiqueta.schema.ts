import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroEtiquetaCreateInputObjectSchema as LibroEtiquetaCreateInputObjectSchema } from "./objects/LibroEtiquetaCreateInput.schema.ts";
import { LibroEtiquetaIncludeObjectSchema as LibroEtiquetaIncludeObjectSchema } from "./objects/LibroEtiquetaInclude.schema.ts";
import { LibroEtiquetaSelectObjectSchema as LibroEtiquetaSelectObjectSchema } from "./objects/LibroEtiquetaSelect.schema.ts";
import { LibroEtiquetaUncheckedCreateInputObjectSchema as LibroEtiquetaUncheckedCreateInputObjectSchema } from "./objects/LibroEtiquetaUncheckedCreateInput.schema.ts";
import { LibroEtiquetaUncheckedUpdateInputObjectSchema as LibroEtiquetaUncheckedUpdateInputObjectSchema } from "./objects/LibroEtiquetaUncheckedUpdateInput.schema.ts";
import { LibroEtiquetaUpdateInputObjectSchema as LibroEtiquetaUpdateInputObjectSchema } from "./objects/LibroEtiquetaUpdateInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./objects/LibroEtiquetaWhereUniqueInput.schema.ts";

export const LibroEtiquetaUpsertOneSchema: z.ZodType<Prisma.LibroEtiquetaUpsertArgs> = z
	.object({
		select: LibroEtiquetaSelectObjectSchema.optional(),
		include: LibroEtiquetaIncludeObjectSchema.optional(),
		where: LibroEtiquetaWhereUniqueInputObjectSchema,
		create: z.union([LibroEtiquetaCreateInputObjectSchema, LibroEtiquetaUncheckedCreateInputObjectSchema]),
		update: z.union([LibroEtiquetaUpdateInputObjectSchema, LibroEtiquetaUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaUpsertArgs>;

export const LibroEtiquetaUpsertOneZodSchema = z
	.object({
		select: LibroEtiquetaSelectObjectSchema.optional(),
		include: LibroEtiquetaIncludeObjectSchema.optional(),
		where: LibroEtiquetaWhereUniqueInputObjectSchema,
		create: z.union([LibroEtiquetaCreateInputObjectSchema, LibroEtiquetaUncheckedCreateInputObjectSchema]),
		update: z.union([LibroEtiquetaUpdateInputObjectSchema, LibroEtiquetaUncheckedUpdateInputObjectSchema]),
	})
	.strict();
