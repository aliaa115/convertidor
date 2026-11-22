import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateNestedOneWithoutMarcadoresInputObjectSchema as EscritorCreateNestedOneWithoutMarcadoresInputObjectSchema } from "./EscritorCreateNestedOneWithoutMarcadoresInput.schema.ts";
import { EstadoCreateNestedOneWithoutMarcadoresInputObjectSchema as EstadoCreateNestedOneWithoutMarcadoresInputObjectSchema } from "./EstadoCreateNestedOneWithoutMarcadoresInput.schema.ts";
import { ParrafoCreateNestedOneWithoutMarcadoresInputObjectSchema as ParrafoCreateNestedOneWithoutMarcadoresInputObjectSchema } from "./ParrafoCreateNestedOneWithoutMarcadoresInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			color: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			escritor: z.lazy(
				() => EscritorCreateNestedOneWithoutMarcadoresInputObjectSchema,
			),
			parrafo: z.lazy(
				() => ParrafoCreateNestedOneWithoutMarcadoresInputObjectSchema,
			),
			estado: z.lazy(
				() => EstadoCreateNestedOneWithoutMarcadoresInputObjectSchema,
			),
		})
		.strict();
export const MarcadorCreateInputObjectSchema: z.ZodType<Prisma.MarcadorCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorCreateInput>;
export const MarcadorCreateInputObjectZodSchema = makeSchema();
