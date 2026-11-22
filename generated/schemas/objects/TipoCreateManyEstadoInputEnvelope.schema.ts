import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoCreateManyEstadoInputObjectSchema as TipoCreateManyEstadoInputObjectSchema } from "./TipoCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => TipoCreateManyEstadoInputObjectSchema), z.lazy(() => TipoCreateManyEstadoInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const TipoCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.TipoCreateManyEstadoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TipoCreateManyEstadoInputEnvelope>;
export const TipoCreateManyEstadoInputEnvelopeObjectZodSchema = makeSchema();
