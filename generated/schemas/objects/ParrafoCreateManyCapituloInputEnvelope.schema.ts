import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ParrafoCreateManyCapituloInputObjectSchema as ParrafoCreateManyCapituloInputObjectSchema } from "./ParrafoCreateManyCapituloInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => ParrafoCreateManyCapituloInputObjectSchema),
				z.lazy(() => ParrafoCreateManyCapituloInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const ParrafoCreateManyCapituloInputEnvelopeObjectSchema: z.ZodType<Prisma.ParrafoCreateManyCapituloInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateManyCapituloInputEnvelope>;
export const ParrafoCreateManyCapituloInputEnvelopeObjectZodSchema =
	makeSchema();
