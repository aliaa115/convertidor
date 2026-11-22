import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema as ConfiguracionUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema } from "./ConfiguracionUncheckedCreateNestedOneWithoutUsuarioInput.schema.ts";
import { EscritorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema as EscritorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema } from "./EscritorUncheckedCreateNestedOneWithoutUsuarioInput.schema.ts";
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
			configuracion: z
				.lazy(
					() =>
						ConfiguracionUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema,
				)
				.optional(),
			escritor: z
				.lazy(
					() => EscritorUncheckedCreateNestedOneWithoutUsuarioInputObjectSchema,
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
export const UsuarioUncheckedCreateWithoutListasInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedCreateWithoutListasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedCreateWithoutListasInput>;
export const UsuarioUncheckedCreateWithoutListasInputObjectZodSchema =
	makeSchema();
