import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioCreateWithoutConfiguracionInputObjectSchema as UsuarioCreateWithoutConfiguracionInputObjectSchema } from "./UsuarioCreateWithoutConfiguracionInput.schema.ts";
import { UsuarioUncheckedCreateWithoutConfiguracionInputObjectSchema as UsuarioUncheckedCreateWithoutConfiguracionInputObjectSchema } from "./UsuarioUncheckedCreateWithoutConfiguracionInput.schema.ts";
import { UsuarioUncheckedUpdateWithoutConfiguracionInputObjectSchema as UsuarioUncheckedUpdateWithoutConfiguracionInputObjectSchema } from "./UsuarioUncheckedUpdateWithoutConfiguracionInput.schema.ts";
import { UsuarioUpdateWithoutConfiguracionInputObjectSchema as UsuarioUpdateWithoutConfiguracionInputObjectSchema } from "./UsuarioUpdateWithoutConfiguracionInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => UsuarioUpdateWithoutConfiguracionInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutConfiguracionInputObjectSchema)]),
			create: z.union([z.lazy(() => UsuarioCreateWithoutConfiguracionInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutConfiguracionInputObjectSchema)]),
			where: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioUpsertWithoutConfiguracionInputObjectSchema: z.ZodType<Prisma.UsuarioUpsertWithoutConfiguracionInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpsertWithoutConfiguracionInput>;
export const UsuarioUpsertWithoutConfiguracionInputObjectZodSchema = makeSchema();
