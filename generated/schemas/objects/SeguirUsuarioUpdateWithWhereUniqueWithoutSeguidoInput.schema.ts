import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SeguirUsuarioUncheckedUpdateWithoutSeguidoInputObjectSchema as SeguirUsuarioUncheckedUpdateWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioUncheckedUpdateWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioUpdateWithoutSeguidoInputObjectSchema as SeguirUsuarioUpdateWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioUpdateWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => SeguirUsuarioUpdateWithoutSeguidoInputObjectSchema),
				z.lazy(
					() => SeguirUsuarioUncheckedUpdateWithoutSeguidoInputObjectSchema,
				),
			]),
		})
		.strict();
export const SeguirUsuarioUpdateWithWhereUniqueWithoutSeguidoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUpdateWithWhereUniqueWithoutSeguidoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUpdateWithWhereUniqueWithoutSeguidoInput>;
export const SeguirUsuarioUpdateWithWhereUniqueWithoutSeguidoInputObjectZodSchema =
	makeSchema();
