import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaUncheckedUpdateWithoutEstadoInputObjectSchema as ListaUncheckedUpdateWithoutEstadoInputObjectSchema } from "./ListaUncheckedUpdateWithoutEstadoInput.schema.ts";
import { ListaUpdateWithoutEstadoInputObjectSchema as ListaUpdateWithoutEstadoInputObjectSchema } from "./ListaUpdateWithoutEstadoInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./ListaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => ListaUpdateWithoutEstadoInputObjectSchema), z.lazy(() => ListaUncheckedUpdateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const ListaUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ListaUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUpdateWithWhereUniqueWithoutEstadoInput>;
export const ListaUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
