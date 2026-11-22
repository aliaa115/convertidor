import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutFavoritosInputObjectSchema as EstadoCreateWithoutFavoritosInputObjectSchema } from "./EstadoCreateWithoutFavoritosInput.schema.ts";
import { EstadoUncheckedCreateWithoutFavoritosInputObjectSchema as EstadoUncheckedCreateWithoutFavoritosInputObjectSchema } from "./EstadoUncheckedCreateWithoutFavoritosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutFavoritosInputObjectSchema as EstadoUncheckedUpdateWithoutFavoritosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutFavoritosInput.schema.ts";
import { EstadoUpdateWithoutFavoritosInputObjectSchema as EstadoUpdateWithoutFavoritosInputObjectSchema } from "./EstadoUpdateWithoutFavoritosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EstadoUpdateWithoutFavoritosInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutFavoritosInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutFavoritosInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutFavoritosInputObjectSchema),
			]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutFavoritosInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutFavoritosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutFavoritosInput>;
export const EstadoUpsertWithoutFavoritosInputObjectZodSchema = makeSchema();
