import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroEtiquetaIncludeObjectSchema as LibroEtiquetaIncludeObjectSchema } from "./objects/LibroEtiquetaInclude.schema.ts";
import { LibroEtiquetaSelectObjectSchema as LibroEtiquetaSelectObjectSchema } from "./objects/LibroEtiquetaSelect.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./objects/LibroEtiquetaWhereUniqueInput.schema.ts";

export const LibroEtiquetaFindUniqueSchema: z.ZodType<Prisma.LibroEtiquetaFindUniqueArgs> =
	z
		.object({
			select: LibroEtiquetaSelectObjectSchema.optional(),
			include: LibroEtiquetaIncludeObjectSchema.optional(),
			where: LibroEtiquetaWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaFindUniqueArgs>;

export const LibroEtiquetaFindUniqueZodSchema = z
	.object({
		select: LibroEtiquetaSelectObjectSchema.optional(),
		include: LibroEtiquetaIncludeObjectSchema.optional(),
		where: LibroEtiquetaWhereUniqueInputObjectSchema,
	})
	.strict();
