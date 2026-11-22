import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionCreateNestedOneWithoutUsuarioInputObjectSchema as ConfiguracionCreateNestedOneWithoutUsuarioInputObjectSchema } from "./ConfiguracionCreateNestedOneWithoutUsuarioInput.schema.ts";
import { EscritorCreateNestedOneWithoutUsuarioInputObjectSchema as EscritorCreateNestedOneWithoutUsuarioInputObjectSchema } from "./EscritorCreateNestedOneWithoutUsuarioInput.schema.ts";
import { EstadoCreateNestedOneWithoutUsuariosInputObjectSchema as EstadoCreateNestedOneWithoutUsuariosInputObjectSchema } from "./EstadoCreateNestedOneWithoutUsuariosInput.schema.ts";
import { ListaCreateNestedManyWithoutUsuarioInputObjectSchema as ListaCreateNestedManyWithoutUsuarioInputObjectSchema } from "./ListaCreateNestedManyWithoutUsuarioInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			userName: z.string(),
			email: z.string(),
			password: z.string(),
			nivel: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutUsuariosInputObjectSchema)
				.optional(),
			configuracion: z
				.lazy(() => ConfiguracionCreateNestedOneWithoutUsuarioInputObjectSchema)
				.optional(),
			escritor: z
				.lazy(() => EscritorCreateNestedOneWithoutUsuarioInputObjectSchema)
				.optional(),
			listas: z
				.lazy(() => ListaCreateNestedManyWithoutUsuarioInputObjectSchema)
				.optional(),
		})
		.strict();
export const UsuarioCreateWithoutNotificacionsInputObjectSchema: z.ZodType<Prisma.UsuarioCreateWithoutNotificacionsInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateWithoutNotificacionsInput>;
export const UsuarioCreateWithoutNotificacionsInputObjectZodSchema =
	makeSchema();
