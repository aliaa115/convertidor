import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateManyIdiomaInputObjectSchema as LibroCreateManyIdiomaInputObjectSchema } from "./LibroCreateManyIdiomaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => LibroCreateManyIdiomaInputObjectSchema), z.lazy(() => LibroCreateManyIdiomaInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const LibroCreateManyIdiomaInputEnvelopeObjectSchema: z.ZodType<Prisma.LibroCreateManyIdiomaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.LibroCreateManyIdiomaInputEnvelope>;
export const LibroCreateManyIdiomaInputEnvelopeObjectZodSchema = makeSchema();
