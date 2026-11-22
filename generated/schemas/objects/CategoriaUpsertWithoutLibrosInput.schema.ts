import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CategoriaCreateWithoutLibrosInputObjectSchema as CategoriaCreateWithoutLibrosInputObjectSchema } from "./CategoriaCreateWithoutLibrosInput.schema.ts";
import { CategoriaUncheckedCreateWithoutLibrosInputObjectSchema as CategoriaUncheckedCreateWithoutLibrosInputObjectSchema } from "./CategoriaUncheckedCreateWithoutLibrosInput.schema.ts";
import { CategoriaUncheckedUpdateWithoutLibrosInputObjectSchema as CategoriaUncheckedUpdateWithoutLibrosInputObjectSchema } from "./CategoriaUncheckedUpdateWithoutLibrosInput.schema.ts";
import { CategoriaUpdateWithoutLibrosInputObjectSchema as CategoriaUpdateWithoutLibrosInputObjectSchema } from "./CategoriaUpdateWithoutLibrosInput.schema.ts";
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from "./CategoriaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => CategoriaUpdateWithoutLibrosInputObjectSchema), z.lazy(() => CategoriaUncheckedUpdateWithoutLibrosInputObjectSchema)]),
			create: z.union([z.lazy(() => CategoriaCreateWithoutLibrosInputObjectSchema), z.lazy(() => CategoriaUncheckedCreateWithoutLibrosInputObjectSchema)]),
			where: z.lazy(() => CategoriaWhereInputObjectSchema).optional(),
		})
		.strict();
export const CategoriaUpsertWithoutLibrosInputObjectSchema: z.ZodType<Prisma.CategoriaUpsertWithoutLibrosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaUpsertWithoutLibrosInput>;
export const CategoriaUpsertWithoutLibrosInputObjectZodSchema = makeSchema();
