import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCountOutputTypeCountCapitulosArgsObjectSchema as LibroCountOutputTypeCountCapitulosArgsObjectSchema } from "./LibroCountOutputTypeCountCapitulosArgs.schema.ts";
import { LibroCountOutputTypeCountCategoriasArgsObjectSchema as LibroCountOutputTypeCountCategoriasArgsObjectSchema } from "./LibroCountOutputTypeCountCategoriasArgs.schema.ts";
import { LibroCountOutputTypeCountEtiquetasArgsObjectSchema as LibroCountOutputTypeCountEtiquetasArgsObjectSchema } from "./LibroCountOutputTypeCountEtiquetasArgs.schema.ts";
import { LibroCountOutputTypeCountFavoritosArgsObjectSchema as LibroCountOutputTypeCountFavoritosArgsObjectSchema } from "./LibroCountOutputTypeCountFavoritosArgs.schema.ts";
import { LibroCountOutputTypeCountGlosariosArgsObjectSchema as LibroCountOutputTypeCountGlosariosArgsObjectSchema } from "./LibroCountOutputTypeCountGlosariosArgs.schema.ts";
import { LibroCountOutputTypeCountListaLibrosArgsObjectSchema as LibroCountOutputTypeCountListaLibrosArgsObjectSchema } from "./LibroCountOutputTypeCountListaLibrosArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			capitulos: z.union([z.boolean(), z.lazy(() => LibroCountOutputTypeCountCapitulosArgsObjectSchema)]).optional(),
			categorias: z.union([z.boolean(), z.lazy(() => LibroCountOutputTypeCountCategoriasArgsObjectSchema)]).optional(),
			etiquetas: z.union([z.boolean(), z.lazy(() => LibroCountOutputTypeCountEtiquetasArgsObjectSchema)]).optional(),
			favoritos: z.union([z.boolean(), z.lazy(() => LibroCountOutputTypeCountFavoritosArgsObjectSchema)]).optional(),
			glosarios: z.union([z.boolean(), z.lazy(() => LibroCountOutputTypeCountGlosariosArgsObjectSchema)]).optional(),
			listaLibros: z.union([z.boolean(), z.lazy(() => LibroCountOutputTypeCountListaLibrosArgsObjectSchema)]).optional(),
		})
		.strict();
export const LibroCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.LibroCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.LibroCountOutputTypeSelect>;
export const LibroCountOutputTypeSelectObjectZodSchema = makeSchema();
