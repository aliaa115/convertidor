import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateNestedOneWithoutRespuestasInputObjectSchema as ComentarioCreateNestedOneWithoutRespuestasInputObjectSchema } from "./ComentarioCreateNestedOneWithoutRespuestasInput.schema.ts";
import { EscritorCreateNestedOneWithoutComentariosInputObjectSchema as EscritorCreateNestedOneWithoutComentariosInputObjectSchema } from "./EscritorCreateNestedOneWithoutComentariosInput.schema.ts";
import { EstadoCreateNestedOneWithoutComentariosInputObjectSchema as EstadoCreateNestedOneWithoutComentariosInputObjectSchema } from "./EstadoCreateNestedOneWithoutComentariosInput.schema.ts";
import { ParrafoCreateNestedOneWithoutComentariosInputObjectSchema as ParrafoCreateNestedOneWithoutComentariosInputObjectSchema } from "./ParrafoCreateNestedOneWithoutComentariosInput.schema.ts";
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
			parrafo: z.lazy(
				() => ParrafoCreateNestedOneWithoutComentariosInputObjectSchema,
			),
			padre: z
				.lazy(() => ComentarioCreateNestedOneWithoutRespuestasInputObjectSchema)
				.optional(),
			tipo: z
				.lazy(() => TipoCreateNestedOneWithoutComentariosInputObjectSchema)
				.optional(),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutComentariosInputObjectSchema)
				.optional(),
		})
		.strict();
export const ComentarioCreateWithoutRespuestasInputObjectSchema: z.ZodType<Prisma.ComentarioCreateWithoutRespuestasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateWithoutRespuestasInput>;
export const ComentarioCreateWithoutRespuestasInputObjectZodSchema =
	makeSchema();
