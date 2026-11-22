import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateManyTipoInputObjectSchema as ComentarioCreateManyTipoInputObjectSchema } from "./ComentarioCreateManyTipoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => ComentarioCreateManyTipoInputObjectSchema), z.lazy(() => ComentarioCreateManyTipoInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const ComentarioCreateManyTipoInputEnvelopeObjectSchema: z.ZodType<Prisma.ComentarioCreateManyTipoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateManyTipoInputEnvelope>;
export const ComentarioCreateManyTipoInputEnvelopeObjectZodSchema = makeSchema();
