import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioCreateWithoutEstadoInputObjectSchema as UsuarioCreateWithoutEstadoInputObjectSchema } from "./UsuarioCreateWithoutEstadoInput.schema.ts";
import { UsuarioUncheckedCreateWithoutEstadoInputObjectSchema as UsuarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./UsuarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { UsuarioUncheckedUpdateWithoutEstadoInputObjectSchema as UsuarioUncheckedUpdateWithoutEstadoInputObjectSchema } from "./UsuarioUncheckedUpdateWithoutEstadoInput.schema.ts";
import { UsuarioUpdateWithoutEstadoInputObjectSchema as UsuarioUpdateWithoutEstadoInputObjectSchema } from "./UsuarioUpdateWithoutEstadoInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => UsuarioUpdateWithoutEstadoInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutEstadoInputObjectSchema)]),
			create: z.union([z.lazy(() => UsuarioCreateWithoutEstadoInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const UsuarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.UsuarioUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpsertWithWhereUniqueWithoutEstadoInput>;
export const UsuarioUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
