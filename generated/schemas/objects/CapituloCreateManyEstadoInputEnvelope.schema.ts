import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloCreateManyEstadoInputObjectSchema as CapituloCreateManyEstadoInputObjectSchema } from "./CapituloCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => CapituloCreateManyEstadoInputObjectSchema), z.lazy(() => CapituloCreateManyEstadoInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const CapituloCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.CapituloCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateManyEstadoInputEnvelope>;
export const CapituloCreateManyEstadoInputEnvelopeObjectZodSchema = makeSchema();
