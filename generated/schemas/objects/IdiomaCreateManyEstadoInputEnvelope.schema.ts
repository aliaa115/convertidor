import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { IdiomaCreateManyEstadoInputObjectSchema as IdiomaCreateManyEstadoInputObjectSchema } from "./IdiomaCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => IdiomaCreateManyEstadoInputObjectSchema), z.lazy(() => IdiomaCreateManyEstadoInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const IdiomaCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.IdiomaCreateManyEstadoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.IdiomaCreateManyEstadoInputEnvelope>;
export const IdiomaCreateManyEstadoInputEnvelopeObjectZodSchema = makeSchema();
