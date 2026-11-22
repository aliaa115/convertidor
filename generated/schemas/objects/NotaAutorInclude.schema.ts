import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloArgsObjectSchema as CapituloArgsObjectSchema } from "./CapituloArgs.schema.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
			capitulo: z.union([z.boolean(), z.lazy(() => CapituloArgsObjectSchema)]).optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		})
		.strict();
export const NotaAutorIncludeObjectSchema: z.ZodType<Prisma.NotaAutorInclude> = makeSchema() as unknown as z.ZodType<Prisma.NotaAutorInclude>;
export const NotaAutorIncludeObjectZodSchema = makeSchema();
