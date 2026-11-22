import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioFindManySchema as ComentarioFindManySchema } from "../findManyComentario.schema.ts";
import { ComentarioArgsObjectSchema as ComentarioArgsObjectSchema } from "./ComentarioArgs.schema.ts";
import { ComentarioCountOutputTypeArgsObjectSchema as ComentarioCountOutputTypeArgsObjectSchema } from "./ComentarioCountOutputTypeArgs.schema.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { ParrafoArgsObjectSchema as ParrafoArgsObjectSchema } from "./ParrafoArgs.schema.ts";
import { TipoArgsObjectSchema as TipoArgsObjectSchema } from "./TipoArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			escritor: z
				.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)])
				.optional(),
			parrafo: z
				.union([z.boolean(), z.lazy(() => ParrafoArgsObjectSchema)])
				.optional(),
			padre: z
				.union([z.boolean(), z.lazy(() => ComentarioArgsObjectSchema)])
				.optional(),
			respuestas: z
				.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)])
				.optional(),
			tipo: z
				.union([z.boolean(), z.lazy(() => TipoArgsObjectSchema)])
				.optional(),
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
			_count: z
				.union([
					z.boolean(),
					z.lazy(() => ComentarioCountOutputTypeArgsObjectSchema),
				])
				.optional(),
		})
		.strict();
export const ComentarioIncludeObjectSchema: z.ZodType<Prisma.ComentarioInclude> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioInclude>;
export const ComentarioIncludeObjectZodSchema = makeSchema();
