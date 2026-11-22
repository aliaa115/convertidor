import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CategoriaArgsObjectSchema as CategoriaArgsObjectSchema } from "./CategoriaArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./LibroArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
			libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
			categoria: z.union([z.boolean(), z.lazy(() => CategoriaArgsObjectSchema)]).optional(),
		})
		.strict();
export const LibroCategoriaIncludeObjectSchema: z.ZodType<Prisma.LibroCategoriaInclude> = makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaInclude>;
export const LibroCategoriaIncludeObjectZodSchema = makeSchema();
