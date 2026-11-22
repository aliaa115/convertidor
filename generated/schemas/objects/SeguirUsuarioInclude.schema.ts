import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
			seguido: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		})
		.strict();
export const SeguirUsuarioIncludeObjectSchema: z.ZodType<Prisma.SeguirUsuarioInclude> = makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioInclude>;
export const SeguirUsuarioIncludeObjectZodSchema = makeSchema();
