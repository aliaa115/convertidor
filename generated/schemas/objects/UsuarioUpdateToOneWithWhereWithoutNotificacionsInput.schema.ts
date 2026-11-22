import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioUncheckedUpdateWithoutNotificacionsInputObjectSchema as UsuarioUncheckedUpdateWithoutNotificacionsInputObjectSchema } from "./UsuarioUncheckedUpdateWithoutNotificacionsInput.schema.ts";
import { UsuarioUpdateWithoutNotificacionsInputObjectSchema as UsuarioUpdateWithoutNotificacionsInputObjectSchema } from "./UsuarioUpdateWithoutNotificacionsInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => UsuarioUpdateWithoutNotificacionsInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutNotificacionsInputObjectSchema)]),
		})
		.strict();
export const UsuarioUpdateToOneWithWhereWithoutNotificacionsInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutNotificacionsInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutNotificacionsInput>;
export const UsuarioUpdateToOneWithWhereWithoutNotificacionsInputObjectZodSchema = makeSchema();
