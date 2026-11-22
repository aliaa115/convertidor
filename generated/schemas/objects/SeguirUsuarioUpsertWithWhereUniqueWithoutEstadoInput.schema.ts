import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SeguirUsuarioCreateWithoutEstadoInputObjectSchema as SeguirUsuarioCreateWithoutEstadoInputObjectSchema } from "./SeguirUsuarioCreateWithoutEstadoInput.schema.ts";
import { SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema as SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./SeguirUsuarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { SeguirUsuarioUncheckedUpdateWithoutEstadoInputObjectSchema as SeguirUsuarioUncheckedUpdateWithoutEstadoInputObjectSchema } from "./SeguirUsuarioUncheckedUpdateWithoutEstadoInput.schema.ts";
import { SeguirUsuarioUpdateWithoutEstadoInputObjectSchema as SeguirUsuarioUpdateWithoutEstadoInputObjectSchema } from "./SeguirUsuarioUpdateWithoutEstadoInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => SeguirUsuarioUpdateWithoutEstadoInputObjectSchema),
				z.lazy(
					() => SeguirUsuarioUncheckedUpdateWithoutEstadoInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => SeguirUsuarioCreateWithoutEstadoInputObjectSchema),
				z.lazy(
					() => SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema,
				),
			]),
		})
		.strict();
export const SeguirUsuarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUpsertWithWhereUniqueWithoutEstadoInput>;
export const SeguirUsuarioUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
