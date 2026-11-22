import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateNestedOneWithoutNotasAutorInputObjectSchema as CapituloCreateNestedOneWithoutNotasAutorInputObjectSchema } from "./CapituloCreateNestedOneWithoutNotasAutorInput.schema.ts";
import { EscritorCreateNestedOneWithoutNotasAutorInputObjectSchema as EscritorCreateNestedOneWithoutNotasAutorInputObjectSchema } from "./EscritorCreateNestedOneWithoutNotasAutorInput.schema.ts";
import { EstadoCreateNestedOneWithoutNotasAutorInputObjectSchema as EstadoCreateNestedOneWithoutNotasAutorInputObjectSchema } from "./EstadoCreateNestedOneWithoutNotasAutorInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			texto: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			escritor: z.lazy(
				() => EscritorCreateNestedOneWithoutNotasAutorInputObjectSchema,
			),
			capitulo: z.lazy(
				() => CapituloCreateNestedOneWithoutNotasAutorInputObjectSchema,
			),
			estado: z.lazy(
				() => EstadoCreateNestedOneWithoutNotasAutorInputObjectSchema,
			),
		})
		.strict();
export const NotaAutorCreateInputObjectSchema: z.ZodType<Prisma.NotaAutorCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateInput>;
export const NotaAutorCreateInputObjectZodSchema = makeSchema();
