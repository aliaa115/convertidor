import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionCreateManyEstadoInputObjectSchema as ConfiguracionCreateManyEstadoInputObjectSchema } from "./ConfiguracionCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => ConfiguracionCreateManyEstadoInputObjectSchema), z.lazy(() => ConfiguracionCreateManyEstadoInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const ConfiguracionCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.ConfiguracionCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionCreateManyEstadoInputEnvelope>;
export const ConfiguracionCreateManyEstadoInputEnvelopeObjectZodSchema = makeSchema();
