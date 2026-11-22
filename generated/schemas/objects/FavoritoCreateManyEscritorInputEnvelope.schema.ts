import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { FavoritoCreateManyEscritorInputObjectSchema as FavoritoCreateManyEscritorInputObjectSchema } from "./FavoritoCreateManyEscritorInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => FavoritoCreateManyEscritorInputObjectSchema),
				z.lazy(() => FavoritoCreateManyEscritorInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const FavoritoCreateManyEscritorInputEnvelopeObjectSchema: z.ZodType<Prisma.FavoritoCreateManyEscritorInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoCreateManyEscritorInputEnvelope>;
export const FavoritoCreateManyEscritorInputEnvelopeObjectZodSchema =
	makeSchema();
