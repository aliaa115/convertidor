import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateNestedManyWithoutPadreInputObjectSchema as ComentarioCreateNestedManyWithoutPadreInputObjectSchema } from "./ComentarioCreateNestedManyWithoutPadreInput.schema.ts";
import { ComentarioCreateNestedOneWithoutRespuestasInputObjectSchema as ComentarioCreateNestedOneWithoutRespuestasInputObjectSchema } from "./ComentarioCreateNestedOneWithoutRespuestasInput.schema.ts";
import { EstadoCreateNestedOneWithoutComentariosInputObjectSchema as EstadoCreateNestedOneWithoutComentariosInputObjectSchema } from "./EstadoCreateNestedOneWithoutComentariosInput.schema.ts";
import { ParrafoCreateNestedOneWithoutComentariosInputObjectSchema as ParrafoCreateNestedOneWithoutComentariosInputObjectSchema } from "./ParrafoCreateNestedOneWithoutComentariosInput.schema.ts";
import { TipoCreateNestedOneWithoutComentariosInputObjectSchema as TipoCreateNestedOneWithoutComentariosInputObjectSchema } from "./TipoCreateNestedOneWithoutComentariosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			contenido: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			parrafo: z.lazy(() => ParrafoCreateNestedOneWithoutComentariosInputObjectSchema),
			padre: z.lazy(() => ComentarioCreateNestedOneWithoutRespuestasInputObjectSchema).optional(),
			respuestas: z.lazy(() => ComentarioCreateNestedManyWithoutPadreInputObjectSchema).optional(),
			tipo: z.lazy(() => TipoCreateNestedOneWithoutComentariosInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutComentariosInputObjectSchema).optional(),
		})
		.strict();
export const ComentarioCreateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.ComentarioCreateWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateWithoutEscritorInput>;
export const ComentarioCreateWithoutEscritorInputObjectZodSchema = makeSchema();
