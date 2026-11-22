import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaScalarWhereInputObjectSchema as ListaScalarWhereInputObjectSchema } from "./ListaScalarWhereInput.schema.ts";
import { ListaUncheckedUpdateManyWithoutUsuarioInputObjectSchema as ListaUncheckedUpdateManyWithoutUsuarioInputObjectSchema } from "./ListaUncheckedUpdateManyWithoutUsuarioInput.schema.ts";
import { ListaUpdateManyMutationInputObjectSchema as ListaUpdateManyMutationInputObjectSchema } from "./ListaUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => ListaUpdateManyMutationInputObjectSchema), z.lazy(() => ListaUncheckedUpdateManyWithoutUsuarioInputObjectSchema)]),
		})
		.strict();
export const ListaUpdateManyWithWhereWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ListaUpdateManyWithWhereWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUpdateManyWithWhereWithoutUsuarioInput>;
export const ListaUpdateManyWithWhereWithoutUsuarioInputObjectZodSchema = makeSchema();
