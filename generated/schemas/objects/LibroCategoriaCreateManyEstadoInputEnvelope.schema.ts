import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaCreateManyEstadoInputObjectSchema as LibroCategoriaCreateManyEstadoInputObjectSchema } from "./LibroCategoriaCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => LibroCategoriaCreateManyEstadoInputObjectSchema),
				z.lazy(() => LibroCategoriaCreateManyEstadoInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const LibroCategoriaCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateManyEstadoInputEnvelope>;
export const LibroCategoriaCreateManyEstadoInputEnvelopeObjectZodSchema =
	makeSchema();
