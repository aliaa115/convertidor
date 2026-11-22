import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CategoriaScalarWhereInputObjectSchema as CategoriaScalarWhereInputObjectSchema } from "./CategoriaScalarWhereInput.schema.ts";
import { CategoriaUncheckedUpdateManyWithoutEstadoInputObjectSchema as CategoriaUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./CategoriaUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { CategoriaUpdateManyMutationInputObjectSchema as CategoriaUpdateManyMutationInputObjectSchema } from "./CategoriaUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CategoriaScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => CategoriaUpdateManyMutationInputObjectSchema), z.lazy(() => CategoriaUncheckedUpdateManyWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const CategoriaUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CategoriaUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaUpdateManyWithWhereWithoutEstadoInput>;
export const CategoriaUpdateManyWithWhereWithoutEstadoInputObjectZodSchema = makeSchema();
