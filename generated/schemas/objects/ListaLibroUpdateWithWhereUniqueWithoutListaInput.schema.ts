import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroUncheckedUpdateWithoutListaInputObjectSchema as ListaLibroUncheckedUpdateWithoutListaInputObjectSchema } from "./ListaLibroUncheckedUpdateWithoutListaInput.schema.ts";
import { ListaLibroUpdateWithoutListaInputObjectSchema as ListaLibroUpdateWithoutListaInputObjectSchema } from "./ListaLibroUpdateWithoutListaInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./ListaLibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaLibroWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => ListaLibroUpdateWithoutListaInputObjectSchema), z.lazy(() => ListaLibroUncheckedUpdateWithoutListaInputObjectSchema)]),
		})
		.strict();
export const ListaLibroUpdateWithWhereUniqueWithoutListaInputObjectSchema: z.ZodType<Prisma.ListaLibroUpdateWithWhereUniqueWithoutListaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUpdateWithWhereUniqueWithoutListaInput>;
export const ListaLibroUpdateWithWhereUniqueWithoutListaInputObjectZodSchema = makeSchema();
