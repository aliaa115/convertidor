import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaLibroCreateManyLibroInputObjectSchema as ListaLibroCreateManyLibroInputObjectSchema } from "./ListaLibroCreateManyLibroInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => ListaLibroCreateManyLibroInputObjectSchema),
				z.lazy(() => ListaLibroCreateManyLibroInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const ListaLibroCreateManyLibroInputEnvelopeObjectSchema: z.ZodType<Prisma.ListaLibroCreateManyLibroInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateManyLibroInputEnvelope>;
export const ListaLibroCreateManyLibroInputEnvelopeObjectZodSchema =
	makeSchema();
