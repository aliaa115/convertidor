import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateNestedOneWithoutConfiguracionesInputObjectSchema as EstadoCreateNestedOneWithoutConfiguracionesInputObjectSchema } from "./EstadoCreateNestedOneWithoutConfiguracionesInput.schema.ts";
import { TipoCreateNestedOneWithoutConfiguracionesInputObjectSchema as TipoCreateNestedOneWithoutConfiguracionesInputObjectSchema } from "./TipoCreateNestedOneWithoutConfiguracionesInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			valor: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			tipo: z.lazy(() => TipoCreateNestedOneWithoutConfiguracionesInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutConfiguracionesInputObjectSchema).optional(),
		})
		.strict();
export const ConfiguracionCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ConfiguracionCreateWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionCreateWithoutUsuarioInput>;
export const ConfiguracionCreateWithoutUsuarioInputObjectZodSchema = makeSchema();
