import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { FavoritoScalarWhereInputObjectSchema as FavoritoScalarWhereInputObjectSchema } from "./FavoritoScalarWhereInput.schema.ts";
import { FavoritoUncheckedUpdateManyWithoutEscritorInputObjectSchema as FavoritoUncheckedUpdateManyWithoutEscritorInputObjectSchema } from "./FavoritoUncheckedUpdateManyWithoutEscritorInput.schema.ts";
import { FavoritoUpdateManyMutationInputObjectSchema as FavoritoUpdateManyMutationInputObjectSchema } from "./FavoritoUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => FavoritoUpdateManyMutationInputObjectSchema), z.lazy(() => FavoritoUncheckedUpdateManyWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const FavoritoUpdateManyWithWhereWithoutEscritorInputObjectSchema: z.ZodType<Prisma.FavoritoUpdateManyWithWhereWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUpdateManyWithWhereWithoutEscritorInput>;
export const FavoritoUpdateManyWithWhereWithoutEscritorInputObjectZodSchema = makeSchema();
