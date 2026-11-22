import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateManyEstadoInputObjectSchema as EscritorCreateManyEstadoInputObjectSchema } from "./EscritorCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => EscritorCreateManyEstadoInputObjectSchema),
				z.lazy(() => EscritorCreateManyEstadoInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const EscritorCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.EscritorCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateManyEstadoInputEnvelope>;
export const EscritorCreateManyEstadoInputEnvelopeObjectZodSchema =
	makeSchema();
