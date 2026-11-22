import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaWhereInputObjectSchema as LibroEtiquetaWhereInputObjectSchema } from "./LibroEtiquetaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => LibroEtiquetaWhereInputObjectSchema).optional(),
			some: z.lazy(() => LibroEtiquetaWhereInputObjectSchema).optional(),
			none: z.lazy(() => LibroEtiquetaWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroEtiquetaListRelationFilterObjectSchema: z.ZodType<Prisma.LibroEtiquetaListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaListRelationFilter>;
export const LibroEtiquetaListRelationFilterObjectZodSchema = makeSchema();
