import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioCreateOrConnectWithoutConfiguracionInputObjectSchema as UsuarioCreateOrConnectWithoutConfiguracionInputObjectSchema } from "./UsuarioCreateOrConnectWithoutConfiguracionInput.schema.ts";
import { UsuarioCreateWithoutConfiguracionInputObjectSchema as UsuarioCreateWithoutConfiguracionInputObjectSchema } from "./UsuarioCreateWithoutConfiguracionInput.schema.ts";
import { UsuarioUncheckedCreateWithoutConfiguracionInputObjectSchema as UsuarioUncheckedCreateWithoutConfiguracionInputObjectSchema } from "./UsuarioUncheckedCreateWithoutConfiguracionInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => UsuarioCreateWithoutConfiguracionInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutConfiguracionInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutConfiguracionInputObjectSchema).optional(),
			connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioCreateNestedOneWithoutConfiguracionInputObjectSchema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutConfiguracionInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateNestedOneWithoutConfiguracionInput>;
export const UsuarioCreateNestedOneWithoutConfiguracionInputObjectZodSchema = makeSchema();
