import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroEtiquetaCreateManyLibroInputObjectSchema as LibroEtiquetaCreateManyLibroInputObjectSchema } from "./LibroEtiquetaCreateManyLibroInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => LibroEtiquetaCreateManyLibroInputObjectSchema),
				z.lazy(() => LibroEtiquetaCreateManyLibroInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const LibroEtiquetaCreateManyLibroInputEnvelopeObjectSchema: z.ZodType<Prisma.LibroEtiquetaCreateManyLibroInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateManyLibroInputEnvelope>;
export const LibroEtiquetaCreateManyLibroInputEnvelopeObjectZodSchema =
	makeSchema();
