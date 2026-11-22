import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateNestedOneWithoutMarcadoresInputObjectSchema as EstadoCreateNestedOneWithoutMarcadoresInputObjectSchema } from "./EstadoCreateNestedOneWithoutMarcadoresInput.schema.ts";
import { ParrafoCreateNestedOneWithoutMarcadoresInputObjectSchema as ParrafoCreateNestedOneWithoutMarcadoresInputObjectSchema } from "./ParrafoCreateNestedOneWithoutMarcadoresInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			color: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			parrafo: z.lazy(
				() => ParrafoCreateNestedOneWithoutMarcadoresInputObjectSchema,
			),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutMarcadoresInputObjectSchema)
				.optional(),
		})
		.strict();
export const MarcadorCreateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.MarcadorCreateWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorCreateWithoutEscritorInput>;
export const MarcadorCreateWithoutEscritorInputObjectZodSchema = makeSchema();
