import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { FavoritoUncheckedUpdateWithoutEstadoInputObjectSchema as FavoritoUncheckedUpdateWithoutEstadoInputObjectSchema } from "./FavoritoUncheckedUpdateWithoutEstadoInput.schema.ts";
import { FavoritoUpdateWithoutEstadoInputObjectSchema as FavoritoUpdateWithoutEstadoInputObjectSchema } from "./FavoritoUpdateWithoutEstadoInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./FavoritoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => FavoritoWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => FavoritoUpdateWithoutEstadoInputObjectSchema),
				z.lazy(() => FavoritoUncheckedUpdateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const FavoritoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.FavoritoUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoUpdateWithWhereUniqueWithoutEstadoInput>;
export const FavoritoUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
