import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./LibroArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
			libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		})
		.strict();
export const FavoritoIncludeObjectSchema: z.ZodType<Prisma.FavoritoInclude> = makeSchema() as unknown as z.ZodType<Prisma.FavoritoInclude>;
export const FavoritoIncludeObjectZodSchema = makeSchema();
