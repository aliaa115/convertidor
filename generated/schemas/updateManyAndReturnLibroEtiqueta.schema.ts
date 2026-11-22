import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroEtiquetaSelectObjectSchema as LibroEtiquetaSelectObjectSchema } from "./objects/LibroEtiquetaSelect.schema.ts";
import { LibroEtiquetaUpdateManyMutationInputObjectSchema as LibroEtiquetaUpdateManyMutationInputObjectSchema } from "./objects/LibroEtiquetaUpdateManyMutationInput.schema.ts";
import { LibroEtiquetaWhereInputObjectSchema as LibroEtiquetaWhereInputObjectSchema } from "./objects/LibroEtiquetaWhereInput.schema.ts";

export const LibroEtiquetaUpdateManyAndReturnSchema: z.ZodType<Prisma.LibroEtiquetaUpdateManyAndReturnArgs> = z
	.object({ select: LibroEtiquetaSelectObjectSchema.optional(), data: LibroEtiquetaUpdateManyMutationInputObjectSchema, where: LibroEtiquetaWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateManyAndReturnArgs>;

export const LibroEtiquetaUpdateManyAndReturnZodSchema = z
	.object({ select: LibroEtiquetaSelectObjectSchema.optional(), data: LibroEtiquetaUpdateManyMutationInputObjectSchema, where: LibroEtiquetaWhereInputObjectSchema.optional() })
	.strict();
