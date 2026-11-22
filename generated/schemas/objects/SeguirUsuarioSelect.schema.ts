import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			escritorId: z.boolean().optional(),
			escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
			escritorSeguidoId: z.boolean().optional(),
			seguido: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
			estadoId: z.boolean().optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		})
		.strict();
export const SeguirUsuarioSelectObjectSchema: z.ZodType<Prisma.SeguirUsuarioSelect> = makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioSelect>;
export const SeguirUsuarioSelectObjectZodSchema = makeSchema();
