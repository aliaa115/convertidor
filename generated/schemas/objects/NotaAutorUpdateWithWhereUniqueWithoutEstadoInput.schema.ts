import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotaAutorUncheckedUpdateWithoutEstadoInputObjectSchema as NotaAutorUncheckedUpdateWithoutEstadoInputObjectSchema } from "./NotaAutorUncheckedUpdateWithoutEstadoInput.schema.ts";
import { NotaAutorUpdateWithoutEstadoInputObjectSchema as NotaAutorUpdateWithoutEstadoInputObjectSchema } from "./NotaAutorUpdateWithoutEstadoInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => NotaAutorUpdateWithoutEstadoInputObjectSchema), z.lazy(() => NotaAutorUncheckedUpdateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const NotaAutorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.NotaAutorUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUpdateWithWhereUniqueWithoutEstadoInput>;
export const NotaAutorUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
