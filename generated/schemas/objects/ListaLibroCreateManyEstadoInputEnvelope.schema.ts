import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroCreateManyEstadoInputObjectSchema as ListaLibroCreateManyEstadoInputObjectSchema } from "./ListaLibroCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => ListaLibroCreateManyEstadoInputObjectSchema), z.lazy(() => ListaLibroCreateManyEstadoInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const ListaLibroCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.ListaLibroCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateManyEstadoInputEnvelope>;
export const ListaLibroCreateManyEstadoInputEnvelopeObjectZodSchema = makeSchema();
