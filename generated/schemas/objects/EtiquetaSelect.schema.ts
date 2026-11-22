import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaFindManySchema as LibroEtiquetaFindManySchema } from "../findManyLibroEtiqueta.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { EtiquetaCountOutputTypeArgsObjectSchema as EtiquetaCountOutputTypeArgsObjectSchema } from "./EtiquetaCountOutputTypeArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			nombre: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
			libros: z.union([z.boolean(), z.lazy(() => LibroEtiquetaFindManySchema)]).optional(),
			_count: z.union([z.boolean(), z.lazy(() => EtiquetaCountOutputTypeArgsObjectSchema)]).optional(),
		})
		.strict();
export const EtiquetaSelectObjectSchema: z.ZodType<Prisma.EtiquetaSelect> = makeSchema() as unknown as z.ZodType<Prisma.EtiquetaSelect>;
export const EtiquetaSelectObjectZodSchema = makeSchema();
