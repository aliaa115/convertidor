import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioFindManySchema as ComentarioFindManySchema } from "../findManyComentario.schema.ts";
import { MarcadorFindManySchema as MarcadorFindManySchema } from "../findManyMarcador.schema.ts";
import { CapituloArgsObjectSchema as CapituloArgsObjectSchema } from "./CapituloArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { ParrafoCountOutputTypeArgsObjectSchema as ParrafoCountOutputTypeArgsObjectSchema } from "./ParrafoCountOutputTypeArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			capitulo: z.union([z.boolean(), z.lazy(() => CapituloArgsObjectSchema)]).optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
			comentarios: z.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)]).optional(),
			marcadores: z.union([z.boolean(), z.lazy(() => MarcadorFindManySchema)]).optional(),
			_count: z.union([z.boolean(), z.lazy(() => ParrafoCountOutputTypeArgsObjectSchema)]).optional(),
		})
		.strict();
export const ParrafoIncludeObjectSchema: z.ZodType<Prisma.ParrafoInclude> = makeSchema() as unknown as z.ZodType<Prisma.ParrafoInclude>;
export const ParrafoIncludeObjectZodSchema = makeSchema();
