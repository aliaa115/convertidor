import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionCreateNestedOneWithoutUsuarioInputObjectSchema as ConfiguracionCreateNestedOneWithoutUsuarioInputObjectSchema } from "./ConfiguracionCreateNestedOneWithoutUsuarioInput.schema.ts";
import { EscritorCreateNestedOneWithoutUsuarioInputObjectSchema as EscritorCreateNestedOneWithoutUsuarioInputObjectSchema } from "./EscritorCreateNestedOneWithoutUsuarioInput.schema.ts";
import { EstadoCreateNestedOneWithoutUsuariosInputObjectSchema as EstadoCreateNestedOneWithoutUsuariosInputObjectSchema } from "./EstadoCreateNestedOneWithoutUsuariosInput.schema.ts";
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
			estado: z.lazy(() => EstadoCreateNestedOneWithoutUsuariosInputObjectSchema).optional(),
			configuracion: z.lazy(() => ConfiguracionCreateNestedOneWithoutUsuarioInputObjectSchema).optional(),
			escritor: z.lazy(() => EscritorCreateNestedOneWithoutUsuarioInputObjectSchema).optional(),
			notificacions: z.lazy(() => NotificacionCreateNestedManyWithoutUsuarioInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioCreateWithoutListasInputObjectSchema: z.ZodType<Prisma.UsuarioCreateWithoutListasInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateWithoutListasInput>;
export const UsuarioCreateWithoutListasInputObjectZodSchema = makeSchema();
