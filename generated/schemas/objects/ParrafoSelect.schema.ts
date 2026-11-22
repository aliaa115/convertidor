import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioFindManySchema as ComentarioFindManySchema } from "../findManyComentario.schema.ts";
import { MarcadorFindManySchema as MarcadorFindManySchema } from "../findManyMarcador.schema.ts";
import { CapituloArgsObjectSchema as CapituloArgsObjectSchema } from "./CapituloArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { ParrafoCountOutputTypeArgsObjectSchema as ParrafoCountOutputTypeArgsObjectSchema } from "./ParrafoCountOutputTypeArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			contenido: z.boolean().optional(),
			indice: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			capituloId: z.boolean().optional(),
			capitulo: z
				.union([z.boolean(), z.lazy(() => CapituloArgsObjectSchema)])
				.optional(),
			estadoId: z.boolean().optional(),
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
			comentarios: z
				.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)])
				.optional(),
			marcadores: z
				.union([z.boolean(), z.lazy(() => MarcadorFindManySchema)])
				.optional(),
			_count: z
				.union([
					z.boolean(),
					z.lazy(() => ParrafoCountOutputTypeArgsObjectSchema),
				])
				.optional(),
		})
		.strict();
export const ParrafoSelectObjectSchema: z.ZodType<Prisma.ParrafoSelect> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoSelect>;
export const ParrafoSelectObjectZodSchema = makeSchema();
