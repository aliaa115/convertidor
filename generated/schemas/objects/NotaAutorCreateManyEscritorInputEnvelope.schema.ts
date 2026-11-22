import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotaAutorCreateManyEscritorInputObjectSchema as NotaAutorCreateManyEscritorInputObjectSchema } from "./NotaAutorCreateManyEscritorInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => NotaAutorCreateManyEscritorInputObjectSchema), z.lazy(() => NotaAutorCreateManyEscritorInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const NotaAutorCreateManyEscritorInputEnvelopeObjectSchema: z.ZodType<Prisma.NotaAutorCreateManyEscritorInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateManyEscritorInputEnvelope>;
export const NotaAutorCreateManyEscritorInputEnvelopeObjectZodSchema = makeSchema();
