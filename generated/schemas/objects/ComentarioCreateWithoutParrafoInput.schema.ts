import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateNestedManyWithoutPadreInputObjectSchema as ComentarioCreateNestedManyWithoutPadreInputObjectSchema } from "./ComentarioCreateNestedManyWithoutPadreInput.schema.ts";
import { ComentarioCreateNestedOneWithoutRespuestasInputObjectSchema as ComentarioCreateNestedOneWithoutRespuestasInputObjectSchema } from "./ComentarioCreateNestedOneWithoutRespuestasInput.schema.ts";
import { EscritorCreateNestedOneWithoutComentariosInputObjectSchema as EscritorCreateNestedOneWithoutComentariosInputObjectSchema } from "./EscritorCreateNestedOneWithoutComentariosInput.schema.ts";
import { EstadoCreateNestedOneWithoutComentariosInputObjectSchema as EstadoCreateNestedOneWithoutComentariosInputObjectSchema } from "./EstadoCreateNestedOneWithoutComentariosInput.schema.ts";
import { TipoCreateNestedOneWithoutComentariosInputObjectSchema as TipoCreateNestedOneWithoutComentariosInputObjectSchema } from "./TipoCreateNestedOneWithoutComentariosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			contenido: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritor: z.lazy(
				() => EscritorCreateNestedOneWithoutComentariosInputObjectSchema,
			),
			padre: z
				.lazy(() => ComentarioCreateNestedOneWithoutRespuestasInputObjectSchema)
				.optional(),
			respuestas: z
				.lazy(() => ComentarioCreateNestedManyWithoutPadreInputObjectSchema)
				.optional(),
			tipo: z
				.lazy(() => TipoCreateNestedOneWithoutComentariosInputObjectSchema)
				.optional(),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutComentariosInputObjectSchema)
				.optional(),
		})
		.strict();
export const ComentarioCreateWithoutParrafoInputObjectSchema: z.ZodType<Prisma.ComentarioCreateWithoutParrafoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateWithoutParrafoInput>;
export const ComentarioCreateWithoutParrafoInputObjectZodSchema = makeSchema();
