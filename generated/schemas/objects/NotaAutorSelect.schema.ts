import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloArgsObjectSchema as CapituloArgsObjectSchema } from "./CapituloArgs.schema.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			texto: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			escritorId: z.boolean().optional(),
			escritor: z
				.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)])
				.optional(),
			capituloId: z.boolean().optional(),
			capitulo: z
				.union([z.boolean(), z.lazy(() => CapituloArgsObjectSchema)])
				.optional(),
			estadoId: z.boolean().optional(),
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
		})
		.strict();
export const NotaAutorSelectObjectSchema: z.ZodType<Prisma.NotaAutorSelect> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorSelect>;
export const NotaAutorSelectObjectZodSchema = makeSchema();
