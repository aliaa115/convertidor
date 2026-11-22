import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioCreateWithoutConfiguracionInputObjectSchema as UsuarioCreateWithoutConfiguracionInputObjectSchema } from "./UsuarioCreateWithoutConfiguracionInput.schema.ts";
import { UsuarioUncheckedCreateWithoutConfiguracionInputObjectSchema as UsuarioUncheckedCreateWithoutConfiguracionInputObjectSchema } from "./UsuarioUncheckedCreateWithoutConfiguracionInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => UsuarioCreateWithoutConfiguracionInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutConfiguracionInputObjectSchema)]),
		})
		.strict();
export const UsuarioCreateOrConnectWithoutConfiguracionInputObjectSchema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutConfiguracionInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateOrConnectWithoutConfiguracionInput>;
export const UsuarioCreateOrConnectWithoutConfiguracionInputObjectZodSchema = makeSchema();
