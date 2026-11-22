import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaCreateWithoutEstadoInputObjectSchema as ListaCreateWithoutEstadoInputObjectSchema } from "./ListaCreateWithoutEstadoInput.schema.ts";
import { ListaUncheckedCreateWithoutEstadoInputObjectSchema as ListaUncheckedCreateWithoutEstadoInputObjectSchema } from "./ListaUncheckedCreateWithoutEstadoInput.schema.ts";
import { ListaUncheckedUpdateWithoutEstadoInputObjectSchema as ListaUncheckedUpdateWithoutEstadoInputObjectSchema } from "./ListaUncheckedUpdateWithoutEstadoInput.schema.ts";
import { ListaUpdateWithoutEstadoInputObjectSchema as ListaUpdateWithoutEstadoInputObjectSchema } from "./ListaUpdateWithoutEstadoInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./ListaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => ListaUpdateWithoutEstadoInputObjectSchema), z.lazy(() => ListaUncheckedUpdateWithoutEstadoInputObjectSchema)]),
			create: z.union([z.lazy(() => ListaCreateWithoutEstadoInputObjectSchema), z.lazy(() => ListaUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const ListaUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ListaUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUpsertWithWhereUniqueWithoutEstadoInput>;
export const ListaUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
