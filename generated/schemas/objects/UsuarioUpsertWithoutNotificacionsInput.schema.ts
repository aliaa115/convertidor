import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioCreateWithoutNotificacionsInputObjectSchema as UsuarioCreateWithoutNotificacionsInputObjectSchema } from "./UsuarioCreateWithoutNotificacionsInput.schema.ts";
import { UsuarioUncheckedCreateWithoutNotificacionsInputObjectSchema as UsuarioUncheckedCreateWithoutNotificacionsInputObjectSchema } from "./UsuarioUncheckedCreateWithoutNotificacionsInput.schema.ts";
import { UsuarioUncheckedUpdateWithoutNotificacionsInputObjectSchema as UsuarioUncheckedUpdateWithoutNotificacionsInputObjectSchema } from "./UsuarioUncheckedUpdateWithoutNotificacionsInput.schema.ts";
import { UsuarioUpdateWithoutNotificacionsInputObjectSchema as UsuarioUpdateWithoutNotificacionsInputObjectSchema } from "./UsuarioUpdateWithoutNotificacionsInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => UsuarioUpdateWithoutNotificacionsInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutNotificacionsInputObjectSchema)]),
			create: z.union([z.lazy(() => UsuarioCreateWithoutNotificacionsInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutNotificacionsInputObjectSchema)]),
			where: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioUpsertWithoutNotificacionsInputObjectSchema: z.ZodType<Prisma.UsuarioUpsertWithoutNotificacionsInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpsertWithoutNotificacionsInput>;
export const UsuarioUpsertWithoutNotificacionsInputObjectZodSchema = makeSchema();
