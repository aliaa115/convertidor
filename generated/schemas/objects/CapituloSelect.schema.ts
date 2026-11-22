import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotaAutorFindManySchema as NotaAutorFindManySchema } from "../findManyNotaAutor.schema.ts";
import { ParrafoFindManySchema as ParrafoFindManySchema } from "../findManyParrafo.schema.ts";
import { CapituloCountOutputTypeArgsObjectSchema as CapituloCountOutputTypeArgsObjectSchema } from "./CapituloCountOutputTypeArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./LibroArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			nombre: z.boolean().optional(),
			indice: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			libroId: z.boolean().optional(),
			libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
			estadoId: z.boolean().optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
			parrafos: z.union([z.boolean(), z.lazy(() => ParrafoFindManySchema)]).optional(),
			notasAutor: z.union([z.boolean(), z.lazy(() => NotaAutorFindManySchema)]).optional(),
			_count: z.union([z.boolean(), z.lazy(() => CapituloCountOutputTypeArgsObjectSchema)]).optional(),
		})
		.strict();
export const CapituloSelectObjectSchema: z.ZodType<Prisma.CapituloSelect> = makeSchema() as unknown as z.ZodType<Prisma.CapituloSelect>;
export const CapituloSelectObjectZodSchema = makeSchema();
