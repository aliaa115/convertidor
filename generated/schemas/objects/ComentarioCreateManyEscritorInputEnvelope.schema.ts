import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateManyEscritorInputObjectSchema as ComentarioCreateManyEscritorInputObjectSchema } from "./ComentarioCreateManyEscritorInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => ComentarioCreateManyEscritorInputObjectSchema), z.lazy(() => ComentarioCreateManyEscritorInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const ComentarioCreateManyEscritorInputEnvelopeObjectSchema: z.ZodType<Prisma.ComentarioCreateManyEscritorInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateManyEscritorInputEnvelope>;
export const ComentarioCreateManyEscritorInputEnvelopeObjectZodSchema = makeSchema();
