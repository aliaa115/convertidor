import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroFindManySchema as LibroFindManySchema } from "../findManyLibro.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { IdiomaCountOutputTypeArgsObjectSchema as IdiomaCountOutputTypeArgsObjectSchema } from "./IdiomaCountOutputTypeArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			nombre: z.boolean().optional(),
			siglas: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
			libros: z
				.union([z.boolean(), z.lazy(() => LibroFindManySchema)])
				.optional(),
			_count: z
				.union([
					z.boolean(),
					z.lazy(() => IdiomaCountOutputTypeArgsObjectSchema),
				])
				.optional(),
		})
		.strict();
export const IdiomaSelectObjectSchema: z.ZodType<Prisma.IdiomaSelect> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaSelect>;
export const IdiomaSelectObjectZodSchema = makeSchema();
