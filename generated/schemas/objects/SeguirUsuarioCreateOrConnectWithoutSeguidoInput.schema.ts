import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SeguirUsuarioCreateWithoutSeguidoInputObjectSchema as SeguirUsuarioCreateWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioCreateWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioUncheckedCreateWithoutSeguidoInputObjectSchema as SeguirUsuarioUncheckedCreateWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioUncheckedCreateWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => SeguirUsuarioCreateWithoutSeguidoInputObjectSchema),
				z.lazy(
					() => SeguirUsuarioUncheckedCreateWithoutSeguidoInputObjectSchema,
				),
			]),
		})
		.strict();
export const SeguirUsuarioCreateOrConnectWithoutSeguidoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioCreateOrConnectWithoutSeguidoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateOrConnectWithoutSeguidoInput>;
export const SeguirUsuarioCreateOrConnectWithoutSeguidoInputObjectZodSchema =
	makeSchema();
