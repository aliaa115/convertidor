import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaScalarWhereInputObjectSchema as ListaScalarWhereInputObjectSchema } from "./ListaScalarWhereInput.schema.ts";
import { ListaUncheckedUpdateManyWithoutEstadoInputObjectSchema as ListaUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./ListaUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { ListaUpdateManyMutationInputObjectSchema as ListaUpdateManyMutationInputObjectSchema } from "./ListaUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => ListaUpdateManyMutationInputObjectSchema), z.lazy(() => ListaUncheckedUpdateManyWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const ListaUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ListaUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUpdateManyWithWhereWithoutEstadoInput>;
export const ListaUpdateManyWithWhereWithoutEstadoInputObjectZodSchema = makeSchema();
