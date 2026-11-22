import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotaAutorCreateManyCapituloInputObjectSchema as NotaAutorCreateManyCapituloInputObjectSchema } from "./NotaAutorCreateManyCapituloInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => NotaAutorCreateManyCapituloInputObjectSchema),
				z.lazy(() => NotaAutorCreateManyCapituloInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const NotaAutorCreateManyCapituloInputEnvelopeObjectSchema: z.ZodType<Prisma.NotaAutorCreateManyCapituloInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateManyCapituloInputEnvelope>;
export const NotaAutorCreateManyCapituloInputEnvelopeObjectZodSchema =
	makeSchema();
