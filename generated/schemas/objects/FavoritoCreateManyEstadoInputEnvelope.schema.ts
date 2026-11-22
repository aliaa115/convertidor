import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { FavoritoCreateManyEstadoInputObjectSchema as FavoritoCreateManyEstadoInputObjectSchema } from "./FavoritoCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => FavoritoCreateManyEstadoInputObjectSchema), z.lazy(() => FavoritoCreateManyEstadoInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const FavoritoCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.FavoritoCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoCreateManyEstadoInputEnvelope>;
export const FavoritoCreateManyEstadoInputEnvelopeObjectZodSchema = makeSchema();
