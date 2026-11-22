import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateNestedOneWithoutNotasAutorInputObjectSchema as EscritorCreateNestedOneWithoutNotasAutorInputObjectSchema } from "./EscritorCreateNestedOneWithoutNotasAutorInput.schema.ts";
import { EstadoCreateNestedOneWithoutNotasAutorInputObjectSchema as EstadoCreateNestedOneWithoutNotasAutorInputObjectSchema } from "./EstadoCreateNestedOneWithoutNotasAutorInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			texto: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritor: z.lazy(
				() => EscritorCreateNestedOneWithoutNotasAutorInputObjectSchema,
			),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutNotasAutorInputObjectSchema)
				.optional(),
		})
		.strict();
export const NotaAutorCreateWithoutCapituloInputObjectSchema: z.ZodType<Prisma.NotaAutorCreateWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateWithoutCapituloInput>;
export const NotaAutorCreateWithoutCapituloInputObjectZodSchema = makeSchema();
