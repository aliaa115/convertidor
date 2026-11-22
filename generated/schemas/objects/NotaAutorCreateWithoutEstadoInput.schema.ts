import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloCreateNestedOneWithoutNotasAutorInputObjectSchema as CapituloCreateNestedOneWithoutNotasAutorInputObjectSchema } from "./CapituloCreateNestedOneWithoutNotasAutorInput.schema.ts";
import { EscritorCreateNestedOneWithoutNotasAutorInputObjectSchema as EscritorCreateNestedOneWithoutNotasAutorInputObjectSchema } from "./EscritorCreateNestedOneWithoutNotasAutorInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			texto: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritor: z.lazy(() => EscritorCreateNestedOneWithoutNotasAutorInputObjectSchema),
			capitulo: z.lazy(() => CapituloCreateNestedOneWithoutNotasAutorInputObjectSchema),
		})
		.strict();
export const NotaAutorCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.NotaAutorCreateWithoutEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateWithoutEstadoInput>;
export const NotaAutorCreateWithoutEstadoInputObjectZodSchema = makeSchema();
