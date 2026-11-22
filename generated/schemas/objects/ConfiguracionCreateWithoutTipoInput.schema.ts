import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateNestedOneWithoutConfiguracionesInputObjectSchema as EstadoCreateNestedOneWithoutConfiguracionesInputObjectSchema } from "./EstadoCreateNestedOneWithoutConfiguracionesInput.schema.ts";
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
			estado: z
				.lazy(
					() => EstadoCreateNestedOneWithoutConfiguracionesInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const ConfiguracionCreateWithoutTipoInputObjectSchema: z.ZodType<Prisma.ConfiguracionCreateWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionCreateWithoutTipoInput>;
export const ConfiguracionCreateWithoutTipoInputObjectZodSchema = makeSchema();
