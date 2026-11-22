import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { GlosarioCreateManyEscritorInputObjectSchema as GlosarioCreateManyEscritorInputObjectSchema } from "./GlosarioCreateManyEscritorInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => GlosarioCreateManyEscritorInputObjectSchema),
				z.lazy(() => GlosarioCreateManyEscritorInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const GlosarioCreateManyEscritorInputEnvelopeObjectSchema: z.ZodType<Prisma.GlosarioCreateManyEscritorInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioCreateManyEscritorInputEnvelope>;
export const GlosarioCreateManyEscritorInputEnvelopeObjectZodSchema =
	makeSchema();
