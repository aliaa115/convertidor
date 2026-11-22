import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./LibroArgs.schema.ts";
import { ListaArgsObjectSchema as ListaArgsObjectSchema } from "./ListaArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			lista: z.union([z.boolean(), z.lazy(() => ListaArgsObjectSchema)]).optional(),
			libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		})
		.strict();
export const ListaLibroIncludeObjectSchema: z.ZodType<Prisma.ListaLibroInclude> = makeSchema() as unknown as z.ZodType<Prisma.ListaLibroInclude>;
export const ListaLibroIncludeObjectZodSchema = makeSchema();
