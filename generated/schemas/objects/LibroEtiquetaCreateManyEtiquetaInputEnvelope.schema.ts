import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaCreateManyEtiquetaInputObjectSchema as LibroEtiquetaCreateManyEtiquetaInputObjectSchema } from "./LibroEtiquetaCreateManyEtiquetaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => LibroEtiquetaCreateManyEtiquetaInputObjectSchema), z.lazy(() => LibroEtiquetaCreateManyEtiquetaInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const LibroEtiquetaCreateManyEtiquetaInputEnvelopeObjectSchema: z.ZodType<Prisma.LibroEtiquetaCreateManyEtiquetaInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateManyEtiquetaInputEnvelope>;
export const LibroEtiquetaCreateManyEtiquetaInputEnvelopeObjectZodSchema = makeSchema();
