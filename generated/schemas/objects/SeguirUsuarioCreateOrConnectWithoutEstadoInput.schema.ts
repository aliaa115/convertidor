import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SeguirUsuarioCreateWithoutEstadoInputObjectSchema as SeguirUsuarioCreateWithoutEstadoInputObjectSchema } from "./SeguirUsuarioCreateWithoutEstadoInput.schema.ts";
import { SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema as SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./SeguirUsuarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => SeguirUsuarioCreateWithoutEstadoInputObjectSchema),
				z.lazy(
					() => SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema,
				),
			]),
		})
		.strict();
export const SeguirUsuarioCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateOrConnectWithoutEstadoInput>;
export const SeguirUsuarioCreateOrConnectWithoutEstadoInputObjectZodSchema =
	makeSchema();
