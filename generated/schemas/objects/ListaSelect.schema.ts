import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroFindManySchema as ListaLibroFindManySchema } from "../findManyListaLibro.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { ListaCountOutputTypeArgsObjectSchema as ListaCountOutputTypeArgsObjectSchema } from "./ListaCountOutputTypeArgs.schema.ts";
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from "./UsuarioArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			nombre: z.boolean().optional(),
			privada: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			usuarioId: z.boolean().optional(),
			usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
			estadoId: z.boolean().optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
			libros: z.union([z.boolean(), z.lazy(() => ListaLibroFindManySchema)]).optional(),
			_count: z.union([z.boolean(), z.lazy(() => ListaCountOutputTypeArgsObjectSchema)]).optional(),
		})
		.strict();
export const ListaSelectObjectSchema: z.ZodType<Prisma.ListaSelect> = makeSchema() as unknown as z.ZodType<Prisma.ListaSelect>;
export const ListaSelectObjectZodSchema = makeSchema();
