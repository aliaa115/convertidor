import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaLibroScalarWhereInputObjectSchema as ListaLibroScalarWhereInputObjectSchema } from "./ListaLibroScalarWhereInput.schema.ts";
import { ListaLibroUncheckedUpdateManyWithoutEstadoInputObjectSchema as ListaLibroUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./ListaLibroUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { ListaLibroUpdateManyMutationInputObjectSchema as ListaLibroUpdateManyMutationInputObjectSchema } from "./ListaLibroUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaLibroScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => ListaLibroUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => ListaLibroUncheckedUpdateManyWithoutEstadoInputObjectSchema,
				),
			]),
		})
		.strict();
export const ListaLibroUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ListaLibroUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUpdateManyWithWhereWithoutEstadoInput>;
export const ListaLibroUpdateManyWithWhereWithoutEstadoInputObjectZodSchema =
	makeSchema();
