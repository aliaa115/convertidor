import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { GlosarioCreateManyLibroInputObjectSchema as GlosarioCreateManyLibroInputObjectSchema } from "./GlosarioCreateManyLibroInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => GlosarioCreateManyLibroInputObjectSchema), z.lazy(() => GlosarioCreateManyLibroInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const GlosarioCreateManyLibroInputEnvelopeObjectSchema: z.ZodType<Prisma.GlosarioCreateManyLibroInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioCreateManyLibroInputEnvelope>;
export const GlosarioCreateManyLibroInputEnvelopeObjectZodSchema = makeSchema();
