import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroCreateWithoutEstadoInputObjectSchema as ListaLibroCreateWithoutEstadoInputObjectSchema } from "./ListaLibroCreateWithoutEstadoInput.schema.ts";
import { ListaLibroUncheckedCreateWithoutEstadoInputObjectSchema as ListaLibroUncheckedCreateWithoutEstadoInputObjectSchema } from "./ListaLibroUncheckedCreateWithoutEstadoInput.schema.ts";
import { ListaLibroUncheckedUpdateWithoutEstadoInputObjectSchema as ListaLibroUncheckedUpdateWithoutEstadoInputObjectSchema } from "./ListaLibroUncheckedUpdateWithoutEstadoInput.schema.ts";
import { ListaLibroUpdateWithoutEstadoInputObjectSchema as ListaLibroUpdateWithoutEstadoInputObjectSchema } from "./ListaLibroUpdateWithoutEstadoInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./ListaLibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaLibroWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => ListaLibroUpdateWithoutEstadoInputObjectSchema), z.lazy(() => ListaLibroUncheckedUpdateWithoutEstadoInputObjectSchema)]),
			create: z.union([z.lazy(() => ListaLibroCreateWithoutEstadoInputObjectSchema), z.lazy(() => ListaLibroUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const ListaLibroUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ListaLibroUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUpsertWithWhereUniqueWithoutEstadoInput>;
export const ListaLibroUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
