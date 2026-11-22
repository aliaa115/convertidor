import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCategoriaCreateManyLibroInputObjectSchema as LibroCategoriaCreateManyLibroInputObjectSchema } from "./LibroCategoriaCreateManyLibroInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => LibroCategoriaCreateManyLibroInputObjectSchema), z.lazy(() => LibroCategoriaCreateManyLibroInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const LibroCategoriaCreateManyLibroInputEnvelopeObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateManyLibroInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateManyLibroInputEnvelope>;
export const LibroCategoriaCreateManyLibroInputEnvelopeObjectZodSchema = makeSchema();
