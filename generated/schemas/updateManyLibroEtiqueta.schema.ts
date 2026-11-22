import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroEtiquetaUpdateManyMutationInputObjectSchema as LibroEtiquetaUpdateManyMutationInputObjectSchema } from "./objects/LibroEtiquetaUpdateManyMutationInput.schema.ts";
import { LibroEtiquetaWhereInputObjectSchema as LibroEtiquetaWhereInputObjectSchema } from "./objects/LibroEtiquetaWhereInput.schema.ts";

export const LibroEtiquetaUpdateManySchema: z.ZodType<Prisma.LibroEtiquetaUpdateManyArgs> = z
	.object({ data: LibroEtiquetaUpdateManyMutationInputObjectSchema, where: LibroEtiquetaWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaUpdateManyArgs>;

export const LibroEtiquetaUpdateManyZodSchema = z.object({ data: LibroEtiquetaUpdateManyMutationInputObjectSchema, where: LibroEtiquetaWhereInputObjectSchema.optional() }).strict();
