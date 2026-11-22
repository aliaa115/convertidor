import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroCreateManyListaInputObjectSchema as ListaLibroCreateManyListaInputObjectSchema } from "./ListaLibroCreateManyListaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => ListaLibroCreateManyListaInputObjectSchema), z.lazy(() => ListaLibroCreateManyListaInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const ListaLibroCreateManyListaInputEnvelopeObjectSchema: z.ZodType<Prisma.ListaLibroCreateManyListaInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateManyListaInputEnvelope>;
export const ListaLibroCreateManyListaInputEnvelopeObjectZodSchema = makeSchema();
