import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloCreateNestedOneWithoutNotasAutorInputObjectSchema as CapituloCreateNestedOneWithoutNotasAutorInputObjectSchema } from "./CapituloCreateNestedOneWithoutNotasAutorInput.schema.ts";
import { EstadoCreateNestedOneWithoutNotasAutorInputObjectSchema as EstadoCreateNestedOneWithoutNotasAutorInputObjectSchema } from "./EstadoCreateNestedOneWithoutNotasAutorInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			texto: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			capitulo: z.lazy(() => CapituloCreateNestedOneWithoutNotasAutorInputObjectSchema),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutNotasAutorInputObjectSchema).optional(),
		})
		.strict();
export const NotaAutorCreateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.NotaAutorCreateWithoutEscritorInput> = makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateWithoutEscritorInput>;
export const NotaAutorCreateWithoutEscritorInputObjectZodSchema = makeSchema();
