import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SeguirUsuarioUncheckedUpdateWithoutEstadoInputObjectSchema as SeguirUsuarioUncheckedUpdateWithoutEstadoInputObjectSchema } from "./SeguirUsuarioUncheckedUpdateWithoutEstadoInput.schema.ts";
import { SeguirUsuarioUpdateWithoutEstadoInputObjectSchema as SeguirUsuarioUpdateWithoutEstadoInputObjectSchema } from "./SeguirUsuarioUpdateWithoutEstadoInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => SeguirUsuarioUpdateWithoutEstadoInputObjectSchema), z.lazy(() => SeguirUsuarioUncheckedUpdateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const SeguirUsuarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUpdateWithWhereUniqueWithoutEstadoInput>;
export const SeguirUsuarioUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
