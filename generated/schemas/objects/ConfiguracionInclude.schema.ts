import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { TipoArgsObjectSchema as TipoArgsObjectSchema } from "./TipoArgs.schema.ts";
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from "./UsuarioArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			usuario: z.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)]).optional(),
			tipo: z.union([z.boolean(), z.lazy(() => TipoArgsObjectSchema)]).optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		})
		.strict();
export const ConfiguracionIncludeObjectSchema: z.ZodType<Prisma.ConfiguracionInclude> = makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionInclude>;
export const ConfiguracionIncludeObjectZodSchema = makeSchema();
