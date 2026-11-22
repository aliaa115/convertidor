import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionCreateManyTipoInputObjectSchema as ConfiguracionCreateManyTipoInputObjectSchema } from "./ConfiguracionCreateManyTipoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => ConfiguracionCreateManyTipoInputObjectSchema),
				z.lazy(() => ConfiguracionCreateManyTipoInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const ConfiguracionCreateManyTipoInputEnvelopeObjectSchema: z.ZodType<Prisma.ConfiguracionCreateManyTipoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionCreateManyTipoInputEnvelope>;
export const ConfiguracionCreateManyTipoInputEnvelopeObjectZodSchema =
	makeSchema();
