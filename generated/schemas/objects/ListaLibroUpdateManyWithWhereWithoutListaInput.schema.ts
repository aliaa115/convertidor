import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroScalarWhereInputObjectSchema as ListaLibroScalarWhereInputObjectSchema } from "./ListaLibroScalarWhereInput.schema.ts";
import { ListaLibroUncheckedUpdateManyWithoutListaInputObjectSchema as ListaLibroUncheckedUpdateManyWithoutListaInputObjectSchema } from "./ListaLibroUncheckedUpdateManyWithoutListaInput.schema.ts";
import { ListaLibroUpdateManyMutationInputObjectSchema as ListaLibroUpdateManyMutationInputObjectSchema } from "./ListaLibroUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaLibroScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => ListaLibroUpdateManyMutationInputObjectSchema), z.lazy(() => ListaLibroUncheckedUpdateManyWithoutListaInputObjectSchema)]),
		})
		.strict();
export const ListaLibroUpdateManyWithWhereWithoutListaInputObjectSchema: z.ZodType<Prisma.ListaLibroUpdateManyWithWhereWithoutListaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUpdateManyWithWhereWithoutListaInput>;
export const ListaLibroUpdateManyWithWhereWithoutListaInputObjectZodSchema = makeSchema();
