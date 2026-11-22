import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaFindManySchema as LibroCategoriaFindManySchema } from "../findManyLibroCategoria.schema.ts";
import { CategoriaCountOutputTypeArgsObjectSchema as CategoriaCountOutputTypeArgsObjectSchema } from "./CategoriaCountOutputTypeArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
			libros: z
				.union([z.boolean(), z.lazy(() => LibroCategoriaFindManySchema)])
				.optional(),
			_count: z
				.union([
					z.boolean(),
					z.lazy(() => CategoriaCountOutputTypeArgsObjectSchema),
				])
				.optional(),
		})
		.strict();
export const CategoriaIncludeObjectSchema: z.ZodType<Prisma.CategoriaInclude> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaInclude>;
export const CategoriaIncludeObjectZodSchema = makeSchema();
