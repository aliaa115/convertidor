import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionCreateNestedOneWithoutUsuarioInputObjectSchema as ConfiguracionCreateNestedOneWithoutUsuarioInputObjectSchema } from "./ConfiguracionCreateNestedOneWithoutUsuarioInput.schema.ts";
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
			configuracion: z
				.lazy(() => ConfiguracionCreateNestedOneWithoutUsuarioInputObjectSchema)
				.optional(),
			listas: z
				.lazy(() => ListaCreateNestedManyWithoutUsuarioInputObjectSchema)
				.optional(),
			notificacions: z
				.lazy(() => NotificacionCreateNestedManyWithoutUsuarioInputObjectSchema)
				.optional(),
		})
		.strict();
export const UsuarioCreateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.UsuarioCreateWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateWithoutEscritorInput>;
export const UsuarioCreateWithoutEscritorInputObjectZodSchema = makeSchema();
