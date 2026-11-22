import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCountOutputTypeCountComentariosArgsObjectSchema as EscritorCountOutputTypeCountComentariosArgsObjectSchema } from "./EscritorCountOutputTypeCountComentariosArgs.schema.ts";
import { EscritorCountOutputTypeCountFavoritosArgsObjectSchema as EscritorCountOutputTypeCountFavoritosArgsObjectSchema } from "./EscritorCountOutputTypeCountFavoritosArgs.schema.ts";
import { EscritorCountOutputTypeCountGlosariosArgsObjectSchema as EscritorCountOutputTypeCountGlosariosArgsObjectSchema } from "./EscritorCountOutputTypeCountGlosariosArgs.schema.ts";
import { EscritorCountOutputTypeCountLibrosArgsObjectSchema as EscritorCountOutputTypeCountLibrosArgsObjectSchema } from "./EscritorCountOutputTypeCountLibrosArgs.schema.ts";
import { EscritorCountOutputTypeCountMarcadoresArgsObjectSchema as EscritorCountOutputTypeCountMarcadoresArgsObjectSchema } from "./EscritorCountOutputTypeCountMarcadoresArgs.schema.ts";
import { EscritorCountOutputTypeCountNotasAutorArgsObjectSchema as EscritorCountOutputTypeCountNotasAutorArgsObjectSchema } from "./EscritorCountOutputTypeCountNotasAutorArgs.schema.ts";
import { EscritorCountOutputTypeCountSeguidoresArgsObjectSchema as EscritorCountOutputTypeCountSeguidoresArgsObjectSchema } from "./EscritorCountOutputTypeCountSeguidoresArgs.schema.ts";
import { EscritorCountOutputTypeCountSiguiendoArgsObjectSchema as EscritorCountOutputTypeCountSiguiendoArgsObjectSchema } from "./EscritorCountOutputTypeCountSiguiendoArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			libros: z.union([z.boolean(), z.lazy(() => EscritorCountOutputTypeCountLibrosArgsObjectSchema)]).optional(),
			comentarios: z.union([z.boolean(), z.lazy(() => EscritorCountOutputTypeCountComentariosArgsObjectSchema)]).optional(),
			favoritos: z.union([z.boolean(), z.lazy(() => EscritorCountOutputTypeCountFavoritosArgsObjectSchema)]).optional(),
			glosarios: z.union([z.boolean(), z.lazy(() => EscritorCountOutputTypeCountGlosariosArgsObjectSchema)]).optional(),
			notasAutor: z.union([z.boolean(), z.lazy(() => EscritorCountOutputTypeCountNotasAutorArgsObjectSchema)]).optional(),
			marcadores: z.union([z.boolean(), z.lazy(() => EscritorCountOutputTypeCountMarcadoresArgsObjectSchema)]).optional(),
			seguidores: z.union([z.boolean(), z.lazy(() => EscritorCountOutputTypeCountSeguidoresArgsObjectSchema)]).optional(),
			siguiendo: z.union([z.boolean(), z.lazy(() => EscritorCountOutputTypeCountSiguiendoArgsObjectSchema)]).optional(),
		})
		.strict();
export const EscritorCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EscritorCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EscritorCountOutputTypeSelect>;
export const EscritorCountOutputTypeSelectObjectZodSchema = makeSchema();
