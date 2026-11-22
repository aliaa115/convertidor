import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioUncheckedUpdateWithoutConfiguracionInputObjectSchema as UsuarioUncheckedUpdateWithoutConfiguracionInputObjectSchema } from "./UsuarioUncheckedUpdateWithoutConfiguracionInput.schema.ts";
import { UsuarioUpdateWithoutConfiguracionInputObjectSchema as UsuarioUpdateWithoutConfiguracionInputObjectSchema } from "./UsuarioUpdateWithoutConfiguracionInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => UsuarioUpdateWithoutConfiguracionInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutConfiguracionInputObjectSchema)]),
		})
		.strict();
export const UsuarioUpdateToOneWithWhereWithoutConfiguracionInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutConfiguracionInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutConfiguracionInput>;
export const UsuarioUpdateToOneWithWhereWithoutConfiguracionInputObjectZodSchema = makeSchema();
