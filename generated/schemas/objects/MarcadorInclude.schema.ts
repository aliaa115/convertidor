import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { ParrafoArgsObjectSchema as ParrafoArgsObjectSchema } from "./ParrafoArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			escritor: z
				.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)])
				.optional(),
			parrafo: z
				.union([z.boolean(), z.lazy(() => ParrafoArgsObjectSchema)])
				.optional(),
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
		})
		.strict();
export const MarcadorIncludeObjectSchema: z.ZodType<Prisma.MarcadorInclude> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorInclude>;
export const MarcadorIncludeObjectZodSchema = makeSchema();
