import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { FavoritoScalarWhereInputObjectSchema as FavoritoScalarWhereInputObjectSchema } from "./FavoritoScalarWhereInput.schema.ts";
import { FavoritoUncheckedUpdateManyWithoutLibroInputObjectSchema as FavoritoUncheckedUpdateManyWithoutLibroInputObjectSchema } from "./FavoritoUncheckedUpdateManyWithoutLibroInput.schema.ts";
import { FavoritoUpdateManyMutationInputObjectSchema as FavoritoUpdateManyMutationInputObjectSchema } from "./FavoritoUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => FavoritoUpdateManyMutationInputObjectSchema), z.lazy(() => FavoritoUncheckedUpdateManyWithoutLibroInputObjectSchema)]),
		})
		.strict();
export const FavoritoUpdateManyWithWhereWithoutLibroInputObjectSchema: z.ZodType<Prisma.FavoritoUpdateManyWithWhereWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUpdateManyWithWhereWithoutLibroInput>;
export const FavoritoUpdateManyWithWhereWithoutLibroInputObjectZodSchema = makeSchema();
