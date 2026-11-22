import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { MarcadorCreateManyEscritorInputObjectSchema as MarcadorCreateManyEscritorInputObjectSchema } from "./MarcadorCreateManyEscritorInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => MarcadorCreateManyEscritorInputObjectSchema),
				z.lazy(() => MarcadorCreateManyEscritorInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const MarcadorCreateManyEscritorInputEnvelopeObjectSchema: z.ZodType<Prisma.MarcadorCreateManyEscritorInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorCreateManyEscritorInputEnvelope>;
export const MarcadorCreateManyEscritorInputEnvelopeObjectZodSchema =
	makeSchema();
