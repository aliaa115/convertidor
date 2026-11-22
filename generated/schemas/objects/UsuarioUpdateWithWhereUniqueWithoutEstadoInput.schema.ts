import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioUncheckedUpdateWithoutEstadoInputObjectSchema as UsuarioUncheckedUpdateWithoutEstadoInputObjectSchema } from "./UsuarioUncheckedUpdateWithoutEstadoInput.schema.ts";
import { UsuarioUpdateWithoutEstadoInputObjectSchema as UsuarioUpdateWithoutEstadoInputObjectSchema } from "./UsuarioUpdateWithoutEstadoInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => UsuarioUpdateWithoutEstadoInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const UsuarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateWithWhereUniqueWithoutEstadoInput>;
export const UsuarioUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
