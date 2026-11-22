import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
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
			id: z.boolean().optional(),
			contenido: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			escritorId: z.boolean().optional(),
			escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
			parrafoId: z.boolean().optional(),
			parrafo: z.union([z.boolean(), z.lazy(() => ParrafoArgsObjectSchema)]).optional(),
			comentarioPadreId: z.boolean().optional(),
			padre: z.union([z.boolean(), z.lazy(() => ComentarioArgsObjectSchema)]).optional(),
			respuestas: z.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)]).optional(),
			tipoId: z.boolean().optional(),
			tipo: z.union([z.boolean(), z.lazy(() => TipoArgsObjectSchema)]).optional(),
			estadoId: z.boolean().optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
			_count: z.union([z.boolean(), z.lazy(() => ComentarioCountOutputTypeArgsObjectSchema)]).optional(),
		})
		.strict();
export const ComentarioSelectObjectSchema: z.ZodType<Prisma.ComentarioSelect> = makeSchema() as unknown as z.ZodType<Prisma.ComentarioSelect>;
export const ComentarioSelectObjectZodSchema = makeSchema();
