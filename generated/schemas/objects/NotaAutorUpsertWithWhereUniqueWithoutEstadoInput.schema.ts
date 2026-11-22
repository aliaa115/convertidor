import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotaAutorCreateWithoutEstadoInputObjectSchema as NotaAutorCreateWithoutEstadoInputObjectSchema } from "./NotaAutorCreateWithoutEstadoInput.schema.ts";
import { NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema as NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema } from "./NotaAutorUncheckedCreateWithoutEstadoInput.schema.ts";
import { NotaAutorUncheckedUpdateWithoutEstadoInputObjectSchema as NotaAutorUncheckedUpdateWithoutEstadoInputObjectSchema } from "./NotaAutorUncheckedUpdateWithoutEstadoInput.schema.ts";
import { NotaAutorUpdateWithoutEstadoInputObjectSchema as NotaAutorUpdateWithoutEstadoInputObjectSchema } from "./NotaAutorUpdateWithoutEstadoInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => NotaAutorUpdateWithoutEstadoInputObjectSchema), z.lazy(() => NotaAutorUncheckedUpdateWithoutEstadoInputObjectSchema)]),
			create: z.union([z.lazy(() => NotaAutorCreateWithoutEstadoInputObjectSchema), z.lazy(() => NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const NotaAutorUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.NotaAutorUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUpsertWithWhereUniqueWithoutEstadoInput>;
export const NotaAutorUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
