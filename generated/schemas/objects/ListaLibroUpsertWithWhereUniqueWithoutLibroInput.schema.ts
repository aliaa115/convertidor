import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroCreateWithoutLibroInputObjectSchema as ListaLibroCreateWithoutLibroInputObjectSchema } from "./ListaLibroCreateWithoutLibroInput.schema.ts";
import { ListaLibroUncheckedCreateWithoutLibroInputObjectSchema as ListaLibroUncheckedCreateWithoutLibroInputObjectSchema } from "./ListaLibroUncheckedCreateWithoutLibroInput.schema.ts";
import { ListaLibroUncheckedUpdateWithoutLibroInputObjectSchema as ListaLibroUncheckedUpdateWithoutLibroInputObjectSchema } from "./ListaLibroUncheckedUpdateWithoutLibroInput.schema.ts";
import { ListaLibroUpdateWithoutLibroInputObjectSchema as ListaLibroUpdateWithoutLibroInputObjectSchema } from "./ListaLibroUpdateWithoutLibroInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./ListaLibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaLibroWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => ListaLibroUpdateWithoutLibroInputObjectSchema), z.lazy(() => ListaLibroUncheckedUpdateWithoutLibroInputObjectSchema)]),
			create: z.union([z.lazy(() => ListaLibroCreateWithoutLibroInputObjectSchema), z.lazy(() => ListaLibroUncheckedCreateWithoutLibroInputObjectSchema)]),
		})
		.strict();
export const ListaLibroUpsertWithWhereUniqueWithoutLibroInputObjectSchema: z.ZodType<Prisma.ListaLibroUpsertWithWhereUniqueWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUpsertWithWhereUniqueWithoutLibroInput>;
export const ListaLibroUpsertWithWhereUniqueWithoutLibroInputObjectZodSchema = makeSchema();
