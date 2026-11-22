import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { TipoCreateNestedOneWithoutConfiguracionesInputObjectSchema as TipoCreateNestedOneWithoutConfiguracionesInputObjectSchema } from "./TipoCreateNestedOneWithoutConfiguracionesInput.schema.ts";
import { UsuarioCreateNestedOneWithoutConfiguracionInputObjectSchema as UsuarioCreateNestedOneWithoutConfiguracionInputObjectSchema } from "./UsuarioCreateNestedOneWithoutConfiguracionInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			valor: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			usuario: z
				.lazy(() => UsuarioCreateNestedOneWithoutConfiguracionInputObjectSchema)
				.optional(),
			tipo: z
				.lazy(() => TipoCreateNestedOneWithoutConfiguracionesInputObjectSchema)
				.optional(),
		})
		.strict();
export const ConfiguracionCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ConfiguracionCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionCreateWithoutEstadoInput>;
export const ConfiguracionCreateWithoutEstadoInputObjectZodSchema =
	makeSchema();
