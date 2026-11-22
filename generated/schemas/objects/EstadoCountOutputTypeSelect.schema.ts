import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCountOutputTypeCountCapitulosArgsObjectSchema as EstadoCountOutputTypeCountCapitulosArgsObjectSchema } from "./EstadoCountOutputTypeCountCapitulosArgs.schema.ts";
import { EstadoCountOutputTypeCountCategoriasArgsObjectSchema as EstadoCountOutputTypeCountCategoriasArgsObjectSchema } from "./EstadoCountOutputTypeCountCategoriasArgs.schema.ts";
import { EstadoCountOutputTypeCountComentariosArgsObjectSchema as EstadoCountOutputTypeCountComentariosArgsObjectSchema } from "./EstadoCountOutputTypeCountComentariosArgs.schema.ts";
import { EstadoCountOutputTypeCountConfiguracionesArgsObjectSchema as EstadoCountOutputTypeCountConfiguracionesArgsObjectSchema } from "./EstadoCountOutputTypeCountConfiguracionesArgs.schema.ts";
import { EstadoCountOutputTypeCountEscritoresArgsObjectSchema as EstadoCountOutputTypeCountEscritoresArgsObjectSchema } from "./EstadoCountOutputTypeCountEscritoresArgs.schema.ts";
import { EstadoCountOutputTypeCountEtiquetasArgsObjectSchema as EstadoCountOutputTypeCountEtiquetasArgsObjectSchema } from "./EstadoCountOutputTypeCountEtiquetasArgs.schema.ts";
import { EstadoCountOutputTypeCountFavoritosArgsObjectSchema as EstadoCountOutputTypeCountFavoritosArgsObjectSchema } from "./EstadoCountOutputTypeCountFavoritosArgs.schema.ts";
import { EstadoCountOutputTypeCountGlosariosArgsObjectSchema as EstadoCountOutputTypeCountGlosariosArgsObjectSchema } from "./EstadoCountOutputTypeCountGlosariosArgs.schema.ts";
import { EstadoCountOutputTypeCountIdiomaArgsObjectSchema as EstadoCountOutputTypeCountIdiomaArgsObjectSchema } from "./EstadoCountOutputTypeCountIdiomaArgs.schema.ts";
import { EstadoCountOutputTypeCountLibroCategoriasArgsObjectSchema as EstadoCountOutputTypeCountLibroCategoriasArgsObjectSchema } from "./EstadoCountOutputTypeCountLibroCategoriasArgs.schema.ts";
import { EstadoCountOutputTypeCountLibroEtiquetasArgsObjectSchema as EstadoCountOutputTypeCountLibroEtiquetasArgsObjectSchema } from "./EstadoCountOutputTypeCountLibroEtiquetasArgs.schema.ts";
import { EstadoCountOutputTypeCountLibrosArgsObjectSchema as EstadoCountOutputTypeCountLibrosArgsObjectSchema } from "./EstadoCountOutputTypeCountLibrosArgs.schema.ts";
import { EstadoCountOutputTypeCountListaLibrosArgsObjectSchema as EstadoCountOutputTypeCountListaLibrosArgsObjectSchema } from "./EstadoCountOutputTypeCountListaLibrosArgs.schema.ts";
import { EstadoCountOutputTypeCountListasArgsObjectSchema as EstadoCountOutputTypeCountListasArgsObjectSchema } from "./EstadoCountOutputTypeCountListasArgs.schema.ts";
import { EstadoCountOutputTypeCountMarcadoresArgsObjectSchema as EstadoCountOutputTypeCountMarcadoresArgsObjectSchema } from "./EstadoCountOutputTypeCountMarcadoresArgs.schema.ts";
import { EstadoCountOutputTypeCountNotasAutorArgsObjectSchema as EstadoCountOutputTypeCountNotasAutorArgsObjectSchema } from "./EstadoCountOutputTypeCountNotasAutorArgs.schema.ts";
import { EstadoCountOutputTypeCountParrafosArgsObjectSchema as EstadoCountOutputTypeCountParrafosArgsObjectSchema } from "./EstadoCountOutputTypeCountParrafosArgs.schema.ts";
import { EstadoCountOutputTypeCountSeguirUsuariosArgsObjectSchema as EstadoCountOutputTypeCountSeguirUsuariosArgsObjectSchema } from "./EstadoCountOutputTypeCountSeguirUsuariosArgs.schema.ts";
import { EstadoCountOutputTypeCountTiposArgsObjectSchema as EstadoCountOutputTypeCountTiposArgsObjectSchema } from "./EstadoCountOutputTypeCountTiposArgs.schema.ts";
import { EstadoCountOutputTypeCountUsuariosArgsObjectSchema as EstadoCountOutputTypeCountUsuariosArgsObjectSchema } from "./EstadoCountOutputTypeCountUsuariosArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			categorias: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountCategoriasArgsObjectSchema),
				])
				.optional(),
			etiquetas: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountEtiquetasArgsObjectSchema),
				])
				.optional(),
			tipos: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountTiposArgsObjectSchema),
				])
				.optional(),
			usuarios: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountUsuariosArgsObjectSchema),
				])
				.optional(),
			escritores: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountEscritoresArgsObjectSchema),
				])
				.optional(),
			configuraciones: z
				.union([
					z.boolean(),
					z.lazy(
						() => EstadoCountOutputTypeCountConfiguracionesArgsObjectSchema,
					),
				])
				.optional(),
			idioma: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountIdiomaArgsObjectSchema),
				])
				.optional(),
			libros: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountLibrosArgsObjectSchema),
				])
				.optional(),
			capitulos: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountCapitulosArgsObjectSchema),
				])
				.optional(),
			parrafos: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountParrafosArgsObjectSchema),
				])
				.optional(),
			comentarios: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountComentariosArgsObjectSchema),
				])
				.optional(),
			libroCategorias: z
				.union([
					z.boolean(),
					z.lazy(
						() => EstadoCountOutputTypeCountLibroCategoriasArgsObjectSchema,
					),
				])
				.optional(),
			libroEtiquetas: z
				.union([
					z.boolean(),
					z.lazy(
						() => EstadoCountOutputTypeCountLibroEtiquetasArgsObjectSchema,
					),
				])
				.optional(),
			favoritos: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountFavoritosArgsObjectSchema),
				])
				.optional(),
			glosarios: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountGlosariosArgsObjectSchema),
				])
				.optional(),
			notasAutor: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountNotasAutorArgsObjectSchema),
				])
				.optional(),
			marcadores: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountMarcadoresArgsObjectSchema),
				])
				.optional(),
			listas: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountListasArgsObjectSchema),
				])
				.optional(),
			listaLibros: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeCountListaLibrosArgsObjectSchema),
				])
				.optional(),
			seguirUsuarios: z
				.union([
					z.boolean(),
					z.lazy(
						() => EstadoCountOutputTypeCountSeguirUsuariosArgsObjectSchema,
					),
				])
				.optional(),
		})
		.strict();
export const EstadoCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EstadoCountOutputTypeSelect> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCountOutputTypeSelect>;
export const EstadoCountOutputTypeSelectObjectZodSchema = makeSchema();
