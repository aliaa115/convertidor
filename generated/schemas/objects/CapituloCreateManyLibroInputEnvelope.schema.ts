import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateManyLibroInputObjectSchema as CapituloCreateManyLibroInputObjectSchema } from "./CapituloCreateManyLibroInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => CapituloCreateManyLibroInputObjectSchema),
				z.lazy(() => CapituloCreateManyLibroInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const CapituloCreateManyLibroInputEnvelopeObjectSchema: z.ZodType<Prisma.CapituloCreateManyLibroInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateManyLibroInputEnvelope>;
export const CapituloCreateManyLibroInputEnvelopeObjectZodSchema = makeSchema();
