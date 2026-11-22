import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { GlosarioCreateManyEstadoInputObjectSchema as GlosarioCreateManyEstadoInputObjectSchema } from "./GlosarioCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => GlosarioCreateManyEstadoInputObjectSchema), z.lazy(() => GlosarioCreateManyEstadoInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const GlosarioCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.GlosarioCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioCreateManyEstadoInputEnvelope>;
export const GlosarioCreateManyEstadoInputEnvelopeObjectZodSchema = makeSchema();
