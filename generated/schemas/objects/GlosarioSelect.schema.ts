import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./LibroArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			palabra: z.boolean().optional(),
			significado: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			libroId: z.boolean().optional(),
			libro: z
				.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)])
				.optional(),
			escritorId: z.boolean().optional(),
			escritor: z
				.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)])
				.optional(),
			estadoId: z.boolean().optional(),
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
		})
		.strict();
export const GlosarioSelectObjectSchema: z.ZodType<Prisma.GlosarioSelect> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioSelect>;
export const GlosarioSelectObjectZodSchema = makeSchema();
