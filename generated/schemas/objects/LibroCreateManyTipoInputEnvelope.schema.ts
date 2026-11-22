import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateManyTipoInputObjectSchema as LibroCreateManyTipoInputObjectSchema } from "./LibroCreateManyTipoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => LibroCreateManyTipoInputObjectSchema),
				z.lazy(() => LibroCreateManyTipoInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const LibroCreateManyTipoInputEnvelopeObjectSchema: z.ZodType<Prisma.LibroCreateManyTipoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateManyTipoInputEnvelope>;
export const LibroCreateManyTipoInputEnvelopeObjectZodSchema = makeSchema();
