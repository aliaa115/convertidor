import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioCreateOrConnectWithoutNotificacionsInputObjectSchema as UsuarioCreateOrConnectWithoutNotificacionsInputObjectSchema } from "./UsuarioCreateOrConnectWithoutNotificacionsInput.schema.ts";
import { UsuarioCreateWithoutNotificacionsInputObjectSchema as UsuarioCreateWithoutNotificacionsInputObjectSchema } from "./UsuarioCreateWithoutNotificacionsInput.schema.ts";
import { UsuarioUncheckedCreateWithoutNotificacionsInputObjectSchema as UsuarioUncheckedCreateWithoutNotificacionsInputObjectSchema } from "./UsuarioUncheckedCreateWithoutNotificacionsInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => UsuarioCreateWithoutNotificacionsInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutNotificacionsInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutNotificacionsInputObjectSchema).optional(),
			connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioCreateNestedOneWithoutNotificacionsInputObjectSchema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutNotificacionsInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateNestedOneWithoutNotificacionsInput>;
export const UsuarioCreateNestedOneWithoutNotificacionsInputObjectZodSchema = makeSchema();
