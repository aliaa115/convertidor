import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroEtiquetaWhereInputObjectSchema as LibroEtiquetaWhereInputObjectSchema } from "./objects/LibroEtiquetaWhereInput.schema.ts";

export const LibroEtiquetaDeleteManySchema: z.ZodType<Prisma.LibroEtiquetaDeleteManyArgs> =
	z
		.object({ where: LibroEtiquetaWhereInputObjectSchema.optional() })
		.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaDeleteManyArgs>;

export const LibroEtiquetaDeleteManyZodSchema = z
	.object({ where: LibroEtiquetaWhereInputObjectSchema.optional() })
	.strict();
