import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { TipoArgsObjectSchema as TipoArgsObjectSchema } from "./TipoArgs.schema.ts";
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from "./UsuarioArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			valor: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			usuarioId: z.boolean().optional(),
			usuario: z
				.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)])
				.optional(),
			tipoId: z.boolean().optional(),
			tipo: z
				.union([z.boolean(), z.lazy(() => TipoArgsObjectSchema)])
				.optional(),
			estadoId: z.boolean().optional(),
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
		})
		.strict();
export const ConfiguracionSelectObjectSchema: z.ZodType<Prisma.ConfiguracionSelect> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionSelect>;
export const ConfiguracionSelectObjectZodSchema = makeSchema();
