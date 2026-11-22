import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateNestedOneWithoutParrafosInputObjectSchema as CapituloCreateNestedOneWithoutParrafosInputObjectSchema } from "./CapituloCreateNestedOneWithoutParrafosInput.schema.ts";
import { ComentarioCreateNestedManyWithoutParrafoInputObjectSchema as ComentarioCreateNestedManyWithoutParrafoInputObjectSchema } from "./ComentarioCreateNestedManyWithoutParrafoInput.schema.ts";
import { MarcadorCreateNestedManyWithoutParrafoInputObjectSchema as MarcadorCreateNestedManyWithoutParrafoInputObjectSchema } from "./MarcadorCreateNestedManyWithoutParrafoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			contenido: z.string().optional().nullable(),
			indice: z.number().int().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			capitulo: z.lazy(
				() => CapituloCreateNestedOneWithoutParrafosInputObjectSchema,
			),
			comentarios: z
				.lazy(() => ComentarioCreateNestedManyWithoutParrafoInputObjectSchema)
				.optional(),
			marcadores: z
				.lazy(() => MarcadorCreateNestedManyWithoutParrafoInputObjectSchema)
				.optional(),
		})
		.strict();
export const ParrafoCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ParrafoCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateWithoutEstadoInput>;
export const ParrafoCreateWithoutEstadoInputObjectZodSchema = makeSchema();
