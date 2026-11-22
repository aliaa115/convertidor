import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateNestedOneWithoutMarcadoresInputObjectSchema as EscritorCreateNestedOneWithoutMarcadoresInputObjectSchema } from "./EscritorCreateNestedOneWithoutMarcadoresInput.schema.ts";
import { EstadoCreateNestedOneWithoutMarcadoresInputObjectSchema as EstadoCreateNestedOneWithoutMarcadoresInputObjectSchema } from "./EstadoCreateNestedOneWithoutMarcadoresInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			color: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritor: z.lazy(
				() => EscritorCreateNestedOneWithoutMarcadoresInputObjectSchema,
			),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutMarcadoresInputObjectSchema)
				.optional(),
		})
		.strict();
export const MarcadorCreateWithoutParrafoInputObjectSchema: z.ZodType<Prisma.MarcadorCreateWithoutParrafoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorCreateWithoutParrafoInput>;
export const MarcadorCreateWithoutParrafoInputObjectZodSchema = makeSchema();
