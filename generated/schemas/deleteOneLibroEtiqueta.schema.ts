import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroEtiquetaIncludeObjectSchema as LibroEtiquetaIncludeObjectSchema } from "./objects/LibroEtiquetaInclude.schema.ts";
import { LibroEtiquetaSelectObjectSchema as LibroEtiquetaSelectObjectSchema } from "./objects/LibroEtiquetaSelect.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./objects/LibroEtiquetaWhereUniqueInput.schema.ts";

export const LibroEtiquetaDeleteOneSchema: z.ZodType<Prisma.LibroEtiquetaDeleteArgs> = z
	.object({ select: LibroEtiquetaSelectObjectSchema.optional(), include: LibroEtiquetaIncludeObjectSchema.optional(), where: LibroEtiquetaWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaDeleteArgs>;

export const LibroEtiquetaDeleteOneZodSchema = z
	.object({ select: LibroEtiquetaSelectObjectSchema.optional(), include: LibroEtiquetaIncludeObjectSchema.optional(), where: LibroEtiquetaWhereUniqueInputObjectSchema })
	.strict();
