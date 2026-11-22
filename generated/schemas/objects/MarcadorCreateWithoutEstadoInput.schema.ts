import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateNestedOneWithoutMarcadoresInputObjectSchema as EscritorCreateNestedOneWithoutMarcadoresInputObjectSchema } from "./EscritorCreateNestedOneWithoutMarcadoresInput.schema.ts";
import { ParrafoCreateNestedOneWithoutMarcadoresInputObjectSchema as ParrafoCreateNestedOneWithoutMarcadoresInputObjectSchema } from "./ParrafoCreateNestedOneWithoutMarcadoresInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			color: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritor: z.lazy(() => EscritorCreateNestedOneWithoutMarcadoresInputObjectSchema),
			parrafo: z.lazy(() => ParrafoCreateNestedOneWithoutMarcadoresInputObjectSchema),
		})
		.strict();
export const MarcadorCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.MarcadorCreateWithoutEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.MarcadorCreateWithoutEstadoInput>;
export const MarcadorCreateWithoutEstadoInputObjectZodSchema = makeSchema();
