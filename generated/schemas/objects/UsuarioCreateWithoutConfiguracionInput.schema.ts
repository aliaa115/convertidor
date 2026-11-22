import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateNestedOneWithoutUsuarioInputObjectSchema as EscritorCreateNestedOneWithoutUsuarioInputObjectSchema } from "./EscritorCreateNestedOneWithoutUsuarioInput.schema.ts";
import { EstadoCreateNestedOneWithoutUsuariosInputObjectSchema as EstadoCreateNestedOneWithoutUsuariosInputObjectSchema } from "./EstadoCreateNestedOneWithoutUsuariosInput.schema.ts";
import { ListaCreateNestedManyWithoutUsuarioInputObjectSchema as ListaCreateNestedManyWithoutUsuarioInputObjectSchema } from "./ListaCreateNestedManyWithoutUsuarioInput.schema.ts";
import { NotificacionCreateNestedManyWithoutUsuarioInputObjectSchema as NotificacionCreateNestedManyWithoutUsuarioInputObjectSchema } from "./NotificacionCreateNestedManyWithoutUsuarioInput.schema.ts";

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
			escritor: z
				.lazy(() => EscritorCreateNestedOneWithoutUsuarioInputObjectSchema)
				.optional(),
			listas: z
				.lazy(() => ListaCreateNestedManyWithoutUsuarioInputObjectSchema)
				.optional(),
			notificacions: z
				.lazy(() => NotificacionCreateNestedManyWithoutUsuarioInputObjectSchema)
				.optional(),
		})
		.strict();
export const UsuarioCreateWithoutConfiguracionInputObjectSchema: z.ZodType<Prisma.UsuarioCreateWithoutConfiguracionInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateWithoutConfiguracionInput>;
export const UsuarioCreateWithoutConfiguracionInputObjectZodSchema =
	makeSchema();
