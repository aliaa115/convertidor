import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { UsuarioCreateWithoutEstadoInputObjectSchema as UsuarioCreateWithoutEstadoInputObjectSchema } from "./UsuarioCreateWithoutEstadoInput.schema.ts";
import { UsuarioUncheckedCreateWithoutEstadoInputObjectSchema as UsuarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./UsuarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => UsuarioCreateWithoutEstadoInputObjectSchema),
				z.lazy(() => UsuarioUncheckedCreateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const UsuarioCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateOrConnectWithoutEstadoInput>;
export const UsuarioCreateOrConnectWithoutEstadoInputObjectZodSchema =
	makeSchema();
