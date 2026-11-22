import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema as EscritorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema } from "./EscritorUncheckedCreateNestedOneWithoutUsuarioInput.schema.ts";
import { ListaUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema as ListaUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema } from "./ListaUncheckedCreateNestedManyWithoutUsuarioInput.schema.ts";
import { NotificacionUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema as NotificacionUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema } from "./NotificacionUncheckedCreateNestedManyWithoutUsuarioInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			userName: z.string(),
			email: z.string(),
			password: z.string(),
			nivel: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
			escritor: z
				.lazy(
					() => EscritorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema,
				)
				.optional(),
			listas: z
				.lazy(
					() => ListaUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema,
				)
				.optional(),
			notificacions: z
				.lazy(
					() =>
						NotificacionUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const UsuarioUncheckedCreateWithoutConfiguracionInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedCreateWithoutConfiguracionInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedCreateWithoutConfiguracionInput>;
export const UsuarioUncheckedCreateWithoutConfiguracionInputObjectZodSchema =
	makeSchema();
