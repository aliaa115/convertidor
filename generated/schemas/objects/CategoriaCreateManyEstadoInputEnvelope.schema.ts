import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CategoriaCreateManyEstadoInputObjectSchema as CategoriaCreateManyEstadoInputObjectSchema } from "./CategoriaCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => CategoriaCreateManyEstadoInputObjectSchema),
				z.lazy(() => CategoriaCreateManyEstadoInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const CategoriaCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.CategoriaCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaCreateManyEstadoInputEnvelope>;
export const CategoriaCreateManyEstadoInputEnvelopeObjectZodSchema =
	makeSchema();
