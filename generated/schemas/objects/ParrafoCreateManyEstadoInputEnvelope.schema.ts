import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoCreateManyEstadoInputObjectSchema as ParrafoCreateManyEstadoInputObjectSchema } from "./ParrafoCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => ParrafoCreateManyEstadoInputObjectSchema), z.lazy(() => ParrafoCreateManyEstadoInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const ParrafoCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.ParrafoCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateManyEstadoInputEnvelope>;
export const ParrafoCreateManyEstadoInputEnvelopeObjectZodSchema = makeSchema();
