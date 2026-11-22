import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaCreateManyEstadoInputObjectSchema as ListaCreateManyEstadoInputObjectSchema } from "./ListaCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => ListaCreateManyEstadoInputObjectSchema),
				z.lazy(() => ListaCreateManyEstadoInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const ListaCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.ListaCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaCreateManyEstadoInputEnvelope>;
export const ListaCreateManyEstadoInputEnvelopeObjectZodSchema = makeSchema();
