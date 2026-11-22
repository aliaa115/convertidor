import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const LibroEtiquetaCreateManyEtiquetaInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaCreateManyEtiquetaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateManyEtiquetaInput>;
export const LibroEtiquetaCreateManyEtiquetaInputObjectZodSchema = makeSchema();
