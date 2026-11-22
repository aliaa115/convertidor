import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./LibroArgs.schema.ts";
import { ListaArgsObjectSchema as ListaArgsObjectSchema } from "./ListaArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			listaId: z.boolean().optional(),
			lista: z
				.union([z.boolean(), z.lazy(() => ListaArgsObjectSchema)])
				.optional(),
			libroId: z.boolean().optional(),
			libro: z
				.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)])
				.optional(),
			estadoId: z.boolean().optional(),
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
		})
		.strict();
export const ListaLibroSelectObjectSchema: z.ZodType<Prisma.ListaLibroSelect> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroSelect>;
export const ListaLibroSelectObjectZodSchema = makeSchema();
