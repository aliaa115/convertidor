import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateManyEstadoInputObjectSchema as ComentarioCreateManyEstadoInputObjectSchema } from "./ComentarioCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => ComentarioCreateManyEstadoInputObjectSchema),
				z.lazy(() => ComentarioCreateManyEstadoInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const ComentarioCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.ComentarioCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateManyEstadoInputEnvelope>;
export const ComentarioCreateManyEstadoInputEnvelopeObjectZodSchema =
	makeSchema();
