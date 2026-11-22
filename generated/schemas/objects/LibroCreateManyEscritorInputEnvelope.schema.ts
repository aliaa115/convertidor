import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateManyEscritorInputObjectSchema as LibroCreateManyEscritorInputObjectSchema } from "./LibroCreateManyEscritorInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => LibroCreateManyEscritorInputObjectSchema),
				z.lazy(() => LibroCreateManyEscritorInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const LibroCreateManyEscritorInputEnvelopeObjectSchema: z.ZodType<Prisma.LibroCreateManyEscritorInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateManyEscritorInputEnvelope>;
export const LibroCreateManyEscritorInputEnvelopeObjectZodSchema = makeSchema();
