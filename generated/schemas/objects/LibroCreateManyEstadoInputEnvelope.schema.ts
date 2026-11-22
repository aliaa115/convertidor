import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateManyEstadoInputObjectSchema as LibroCreateManyEstadoInputObjectSchema } from "./LibroCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => LibroCreateManyEstadoInputObjectSchema),
				z.lazy(() => LibroCreateManyEstadoInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const LibroCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.LibroCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateManyEstadoInputEnvelope>;
export const LibroCreateManyEstadoInputEnvelopeObjectZodSchema = makeSchema();
