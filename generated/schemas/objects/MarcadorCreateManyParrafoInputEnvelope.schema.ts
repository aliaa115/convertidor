import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { MarcadorCreateManyParrafoInputObjectSchema as MarcadorCreateManyParrafoInputObjectSchema } from "./MarcadorCreateManyParrafoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => MarcadorCreateManyParrafoInputObjectSchema),
				z.lazy(() => MarcadorCreateManyParrafoInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const MarcadorCreateManyParrafoInputEnvelopeObjectSchema: z.ZodType<Prisma.MarcadorCreateManyParrafoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorCreateManyParrafoInputEnvelope>;
export const MarcadorCreateManyParrafoInputEnvelopeObjectZodSchema =
	makeSchema();
