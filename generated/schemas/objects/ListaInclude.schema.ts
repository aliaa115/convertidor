import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaLibroFindManySchema as ListaLibroFindManySchema } from "../findManyListaLibro.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { ListaCountOutputTypeArgsObjectSchema as ListaCountOutputTypeArgsObjectSchema } from "./ListaCountOutputTypeArgs.schema.ts";
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from "./UsuarioArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			usuario: z
				.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)])
				.optional(),
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
			libros: z
				.union([z.boolean(), z.lazy(() => ListaLibroFindManySchema)])
				.optional(),
			_count: z
				.union([
					z.boolean(),
					z.lazy(() => ListaCountOutputTypeArgsObjectSchema),
				])
				.optional(),
		})
		.strict();
export const ListaIncludeObjectSchema: z.ZodType<Prisma.ListaInclude> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaInclude>;
export const ListaIncludeObjectZodSchema = makeSchema();
