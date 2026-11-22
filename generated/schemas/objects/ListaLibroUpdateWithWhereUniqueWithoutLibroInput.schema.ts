import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroUncheckedUpdateWithoutLibroInputObjectSchema as ListaLibroUncheckedUpdateWithoutLibroInputObjectSchema } from "./ListaLibroUncheckedUpdateWithoutLibroInput.schema.ts";
import { ListaLibroUpdateWithoutLibroInputObjectSchema as ListaLibroUpdateWithoutLibroInputObjectSchema } from "./ListaLibroUpdateWithoutLibroInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./ListaLibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaLibroWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => ListaLibroUpdateWithoutLibroInputObjectSchema), z.lazy(() => ListaLibroUncheckedUpdateWithoutLibroInputObjectSchema)]),
		})
		.strict();
export const ListaLibroUpdateWithWhereUniqueWithoutLibroInputObjectSchema: z.ZodType<Prisma.ListaLibroUpdateWithWhereUniqueWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUpdateWithWhereUniqueWithoutLibroInput>;
export const ListaLibroUpdateWithWhereUniqueWithoutLibroInputObjectZodSchema = makeSchema();
