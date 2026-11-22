import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaLibroScalarWhereInputObjectSchema as ListaLibroScalarWhereInputObjectSchema } from "./ListaLibroScalarWhereInput.schema.ts";
import { ListaLibroUncheckedUpdateManyWithoutLibroInputObjectSchema as ListaLibroUncheckedUpdateManyWithoutLibroInputObjectSchema } from "./ListaLibroUncheckedUpdateManyWithoutLibroInput.schema.ts";
import { ListaLibroUpdateManyMutationInputObjectSchema as ListaLibroUpdateManyMutationInputObjectSchema } from "./ListaLibroUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaLibroScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => ListaLibroUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => ListaLibroUncheckedUpdateManyWithoutLibroInputObjectSchema,
				),
			]),
		})
		.strict();
export const ListaLibroUpdateManyWithWhereWithoutLibroInputObjectSchema: z.ZodType<Prisma.ListaLibroUpdateManyWithWhereWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroUpdateManyWithWhereWithoutLibroInput>;
export const ListaLibroUpdateManyWithWhereWithoutLibroInputObjectZodSchema =
	makeSchema();
