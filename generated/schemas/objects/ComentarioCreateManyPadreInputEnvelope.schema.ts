import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateManyPadreInputObjectSchema as ComentarioCreateManyPadreInputObjectSchema } from "./ComentarioCreateManyPadreInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => ComentarioCreateManyPadreInputObjectSchema), z.lazy(() => ComentarioCreateManyPadreInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const ComentarioCreateManyPadreInputEnvelopeObjectSchema: z.ZodType<Prisma.ComentarioCreateManyPadreInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateManyPadreInputEnvelope>;
export const ComentarioCreateManyPadreInputEnvelopeObjectZodSchema = makeSchema();
