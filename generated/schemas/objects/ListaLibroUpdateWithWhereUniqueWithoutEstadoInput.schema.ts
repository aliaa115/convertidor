import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroUncheckedUpdateWithoutEstadoInputObjectSchema as ListaLibroUncheckedUpdateWithoutEstadoInputObjectSchema } from "./ListaLibroUncheckedUpdateWithoutEstadoInput.schema.ts";
import { ListaLibroUpdateWithoutEstadoInputObjectSchema as ListaLibroUpdateWithoutEstadoInputObjectSchema } from "./ListaLibroUpdateWithoutEstadoInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./ListaLibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaLibroWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => ListaLibroUpdateWithoutEstadoInputObjectSchema), z.lazy(() => ListaLibroUncheckedUpdateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const ListaLibroUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ListaLibroUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUpdateWithWhereUniqueWithoutEstadoInput>;
export const ListaLibroUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
