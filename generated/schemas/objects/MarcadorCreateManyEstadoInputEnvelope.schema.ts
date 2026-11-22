import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { MarcadorCreateManyEstadoInputObjectSchema as MarcadorCreateManyEstadoInputObjectSchema } from "./MarcadorCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => MarcadorCreateManyEstadoInputObjectSchema),
				z.lazy(() => MarcadorCreateManyEstadoInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const MarcadorCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.MarcadorCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorCreateManyEstadoInputEnvelope>;
export const MarcadorCreateManyEstadoInputEnvelopeObjectZodSchema =
	makeSchema();
