import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SeguirUsuarioCreateWithoutSeguidoInputObjectSchema as SeguirUsuarioCreateWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioCreateWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioUncheckedCreateWithoutSeguidoInputObjectSchema as SeguirUsuarioUncheckedCreateWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioUncheckedCreateWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioUncheckedUpdateWithoutSeguidoInputObjectSchema as SeguirUsuarioUncheckedUpdateWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioUncheckedUpdateWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioUpdateWithoutSeguidoInputObjectSchema as SeguirUsuarioUpdateWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioUpdateWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => SeguirUsuarioUpdateWithoutSeguidoInputObjectSchema),
				z.lazy(
					() => SeguirUsuarioUncheckedUpdateWithoutSeguidoInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => SeguirUsuarioCreateWithoutSeguidoInputObjectSchema),
				z.lazy(
					() => SeguirUsuarioUncheckedCreateWithoutSeguidoInputObjectSchema,
				),
			]),
		})
		.strict();
export const SeguirUsuarioUpsertWithWhereUniqueWithoutSeguidoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUpsertWithWhereUniqueWithoutSeguidoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUpsertWithWhereUniqueWithoutSeguidoInput>;
export const SeguirUsuarioUpsertWithWhereUniqueWithoutSeguidoInputObjectZodSchema =
	makeSchema();
