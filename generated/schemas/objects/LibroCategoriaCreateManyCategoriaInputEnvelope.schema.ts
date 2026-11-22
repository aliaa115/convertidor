import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaCreateManyCategoriaInputObjectSchema as LibroCategoriaCreateManyCategoriaInputObjectSchema } from "./LibroCategoriaCreateManyCategoriaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => LibroCategoriaCreateManyCategoriaInputObjectSchema),
				z
					.lazy(() => LibroCategoriaCreateManyCategoriaInputObjectSchema)
					.array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const LibroCategoriaCreateManyCategoriaInputEnvelopeObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateManyCategoriaInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateManyCategoriaInputEnvelope>;
export const LibroCategoriaCreateManyCategoriaInputEnvelopeObjectZodSchema =
	makeSchema();
