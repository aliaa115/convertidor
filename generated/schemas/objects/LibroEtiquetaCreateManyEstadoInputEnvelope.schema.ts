import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroEtiquetaCreateManyEstadoInputObjectSchema as LibroEtiquetaCreateManyEstadoInputObjectSchema } from "./LibroEtiquetaCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => LibroEtiquetaCreateManyEstadoInputObjectSchema),
				z.lazy(() => LibroEtiquetaCreateManyEstadoInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const LibroEtiquetaCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.LibroEtiquetaCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateManyEstadoInputEnvelope>;
export const LibroEtiquetaCreateManyEstadoInputEnvelopeObjectZodSchema =
	makeSchema();
