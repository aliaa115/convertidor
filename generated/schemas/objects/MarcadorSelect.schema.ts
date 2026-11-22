import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { ParrafoArgsObjectSchema as ParrafoArgsObjectSchema } from "./ParrafoArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			nombre: z.boolean().optional(),
			color: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			escritorId: z.boolean().optional(),
			escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
			parrafoId: z.boolean().optional(),
			parrafo: z.union([z.boolean(), z.lazy(() => ParrafoArgsObjectSchema)]).optional(),
			estadoId: z.boolean().optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		})
		.strict();
export const MarcadorSelectObjectSchema: z.ZodType<Prisma.MarcadorSelect> = makeSchema() as unknown as z.ZodType<Prisma.MarcadorSelect>;
export const MarcadorSelectObjectZodSchema = makeSchema();
