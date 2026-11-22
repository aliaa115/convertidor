import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CategoriaUncheckedUpdateWithoutLibrosInputObjectSchema as CategoriaUncheckedUpdateWithoutLibrosInputObjectSchema } from "./CategoriaUncheckedUpdateWithoutLibrosInput.schema.ts";
import { CategoriaUpdateWithoutLibrosInputObjectSchema as CategoriaUpdateWithoutLibrosInputObjectSchema } from "./CategoriaUpdateWithoutLibrosInput.schema.ts";
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from "./CategoriaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CategoriaWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => CategoriaUpdateWithoutLibrosInputObjectSchema), z.lazy(() => CategoriaUncheckedUpdateWithoutLibrosInputObjectSchema)]),
		})
		.strict();
export const CategoriaUpdateToOneWithWhereWithoutLibrosInputObjectSchema: z.ZodType<Prisma.CategoriaUpdateToOneWithWhereWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaUpdateToOneWithWhereWithoutLibrosInput>;
export const CategoriaUpdateToOneWithWhereWithoutLibrosInputObjectZodSchema = makeSchema();
