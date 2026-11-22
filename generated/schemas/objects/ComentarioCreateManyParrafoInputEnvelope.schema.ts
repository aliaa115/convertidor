import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateManyParrafoInputObjectSchema as ComentarioCreateManyParrafoInputObjectSchema } from "./ComentarioCreateManyParrafoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => ComentarioCreateManyParrafoInputObjectSchema),
				z.lazy(() => ComentarioCreateManyParrafoInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const ComentarioCreateManyParrafoInputEnvelopeObjectSchema: z.ZodType<Prisma.ComentarioCreateManyParrafoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateManyParrafoInputEnvelope>;
export const ComentarioCreateManyParrafoInputEnvelopeObjectZodSchema =
	makeSchema();
