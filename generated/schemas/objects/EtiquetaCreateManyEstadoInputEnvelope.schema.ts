import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EtiquetaCreateManyEstadoInputObjectSchema as EtiquetaCreateManyEstadoInputObjectSchema } from "./EtiquetaCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => EtiquetaCreateManyEstadoInputObjectSchema), z.lazy(() => EtiquetaCreateManyEstadoInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const EtiquetaCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.EtiquetaCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaCreateManyEstadoInputEnvelope>;
export const EtiquetaCreateManyEstadoInputEnvelopeObjectZodSchema = makeSchema();
