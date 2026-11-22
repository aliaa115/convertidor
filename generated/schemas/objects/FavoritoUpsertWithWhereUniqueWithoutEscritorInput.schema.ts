import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { FavoritoCreateWithoutEscritorInputObjectSchema as FavoritoCreateWithoutEscritorInputObjectSchema } from "./FavoritoCreateWithoutEscritorInput.schema.ts";
import { FavoritoUncheckedCreateWithoutEscritorInputObjectSchema as FavoritoUncheckedCreateWithoutEscritorInputObjectSchema } from "./FavoritoUncheckedCreateWithoutEscritorInput.schema.ts";
import { FavoritoUncheckedUpdateWithoutEscritorInputObjectSchema as FavoritoUncheckedUpdateWithoutEscritorInputObjectSchema } from "./FavoritoUncheckedUpdateWithoutEscritorInput.schema.ts";
import { FavoritoUpdateWithoutEscritorInputObjectSchema as FavoritoUpdateWithoutEscritorInputObjectSchema } from "./FavoritoUpdateWithoutEscritorInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => FavoritoUpdateWithoutEscritorInputObjectSchema), z.lazy(() => FavoritoUncheckedUpdateWithoutEscritorInputObjectSchema)]),
			create: z.union([z.lazy(() => FavoritoCreateWithoutEscritorInputObjectSchema), z.lazy(() => FavoritoUncheckedCreateWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const FavoritoUpsertWithWhereUniqueWithoutEscritorInputObjectSchema: z.ZodType<Prisma.FavoritoUpsertWithWhereUniqueWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUpsertWithWhereUniqueWithoutEscritorInput>;
export const FavoritoUpsertWithWhereUniqueWithoutEscritorInputObjectZodSchema = makeSchema();
