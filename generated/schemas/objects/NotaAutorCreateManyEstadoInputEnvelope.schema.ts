import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotaAutorCreateManyEstadoInputObjectSchema as NotaAutorCreateManyEstadoInputObjectSchema } from "./NotaAutorCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => NotaAutorCreateManyEstadoInputObjectSchema),
				z.lazy(() => NotaAutorCreateManyEstadoInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const NotaAutorCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.NotaAutorCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateManyEstadoInputEnvelope>;
export const NotaAutorCreateManyEstadoInputEnvelopeObjectZodSchema =
	makeSchema();
