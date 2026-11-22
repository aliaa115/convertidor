import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { UsuarioCreateWithoutNotificacionsInputObjectSchema as UsuarioCreateWithoutNotificacionsInputObjectSchema } from "./UsuarioCreateWithoutNotificacionsInput.schema.ts";
import { UsuarioUncheckedCreateWithoutNotificacionsInputObjectSchema as UsuarioUncheckedCreateWithoutNotificacionsInputObjectSchema } from "./UsuarioUncheckedCreateWithoutNotificacionsInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => UsuarioCreateWithoutNotificacionsInputObjectSchema),
				z.lazy(
					() => UsuarioUncheckedCreateWithoutNotificacionsInputObjectSchema,
				),
			]),
		})
		.strict();
export const UsuarioCreateOrConnectWithoutNotificacionsInputObjectSchema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutNotificacionsInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateOrConnectWithoutNotificacionsInput>;
export const UsuarioCreateOrConnectWithoutNotificacionsInputObjectZodSchema =
	makeSchema();
