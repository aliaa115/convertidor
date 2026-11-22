import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./LibroArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			escritorId: z.boolean().optional(),
			escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
			libroId: z.boolean().optional(),
			libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
			estadoId: z.boolean().optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		})
		.strict();
export const FavoritoSelectObjectSchema: z.ZodType<Prisma.FavoritoSelect> = makeSchema() as unknown as z.ZodType<Prisma.FavoritoSelect>;
export const FavoritoSelectObjectZodSchema = makeSchema();
