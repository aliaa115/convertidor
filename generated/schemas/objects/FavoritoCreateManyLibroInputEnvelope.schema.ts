import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { FavoritoCreateManyLibroInputObjectSchema as FavoritoCreateManyLibroInputObjectSchema } from "./FavoritoCreateManyLibroInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => FavoritoCreateManyLibroInputObjectSchema), z.lazy(() => FavoritoCreateManyLibroInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const FavoritoCreateManyLibroInputEnvelopeObjectSchema: z.ZodType<Prisma.FavoritoCreateManyLibroInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoCreateManyLibroInputEnvelope>;
export const FavoritoCreateManyLibroInputEnvelopeObjectZodSchema = makeSchema();
