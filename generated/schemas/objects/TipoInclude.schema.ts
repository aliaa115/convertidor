import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioFindManySchema as ComentarioFindManySchema } from "../findManyComentario.schema.ts";
import { ConfiguracionFindManySchema as ConfiguracionFindManySchema } from "../findManyConfiguracion.schema.ts";
import { LibroFindManySchema as LibroFindManySchema } from "../findManyLibro.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { TipoCountOutputTypeArgsObjectSchema as TipoCountOutputTypeArgsObjectSchema } from "./TipoCountOutputTypeArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
			configuraciones: z
				.union([z.boolean(), z.lazy(() => ConfiguracionFindManySchema)])
				.optional(),
			libros: z
				.union([z.boolean(), z.lazy(() => LibroFindManySchema)])
				.optional(),
			comentarios: z
				.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)])
				.optional(),
			_count: z
				.union([z.boolean(), z.lazy(() => TipoCountOutputTypeArgsObjectSchema)])
				.optional(),
		})
		.strict();
export const TipoIncludeObjectSchema: z.ZodType<Prisma.TipoInclude> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoInclude>;
export const TipoIncludeObjectZodSchema = makeSchema();
