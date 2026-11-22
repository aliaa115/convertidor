import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaLibroCreateWithoutListaInputObjectSchema as ListaLibroCreateWithoutListaInputObjectSchema } from "./ListaLibroCreateWithoutListaInput.schema.ts";
import { ListaLibroUncheckedCreateWithoutListaInputObjectSchema as ListaLibroUncheckedCreateWithoutListaInputObjectSchema } from "./ListaLibroUncheckedCreateWithoutListaInput.schema.ts";
import { ListaLibroUncheckedUpdateWithoutListaInputObjectSchema as ListaLibroUncheckedUpdateWithoutListaInputObjectSchema } from "./ListaLibroUncheckedUpdateWithoutListaInput.schema.ts";
import { ListaLibroUpdateWithoutListaInputObjectSchema as ListaLibroUpdateWithoutListaInputObjectSchema } from "./ListaLibroUpdateWithoutListaInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./ListaLibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaLibroWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => ListaLibroUpdateWithoutListaInputObjectSchema),
				z.lazy(() => ListaLibroUncheckedUpdateWithoutListaInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => ListaLibroCreateWithoutListaInputObjectSchema),
				z.lazy(() => ListaLibroUncheckedCreateWithoutListaInputObjectSchema),
			]),
		})
		.strict();
export const ListaLibroUpsertWithWhereUniqueWithoutListaInputObjectSchema: z.ZodType<Prisma.ListaLibroUpsertWithWhereUniqueWithoutListaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUpsertWithWhereUniqueWithoutListaInput>;
export const ListaLibroUpsertWithWhereUniqueWithoutListaInputObjectZodSchema =
	makeSchema();
