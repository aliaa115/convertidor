import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateNestedOneWithoutConfiguracionesInputObjectSchema as EstadoCreateNestedOneWithoutConfiguracionesInputObjectSchema } from "./EstadoCreateNestedOneWithoutConfiguracionesInput.schema.ts";
import { TipoCreateNestedOneWithoutConfiguracionesInputObjectSchema as TipoCreateNestedOneWithoutConfiguracionesInputObjectSchema } from "./TipoCreateNestedOneWithoutConfiguracionesInput.schema.ts";
import { UsuarioCreateNestedOneWithoutConfiguracionInputObjectSchema as UsuarioCreateNestedOneWithoutConfiguracionInputObjectSchema } from "./UsuarioCreateNestedOneWithoutConfiguracionInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			valor: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			usuario: z
				.lazy(() => UsuarioCreateNestedOneWithoutConfiguracionInputObjectSchema)
				.optional(),
			tipo: z
				.lazy(() => TipoCreateNestedOneWithoutConfiguracionesInputObjectSchema)
				.optional(),
			estado: z.lazy(
				() => EstadoCreateNestedOneWithoutConfiguracionesInputObjectSchema,
			),
		})
		.strict();
export const ConfiguracionCreateInputObjectSchema: z.ZodType<Prisma.ConfiguracionCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionCreateInput>;
export const ConfiguracionCreateInputObjectZodSchema = makeSchema();
