import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoUncheckedUpdateWithoutFavoritosInputObjectSchema as EstadoUncheckedUpdateWithoutFavoritosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutFavoritosInput.schema.ts";
import { EstadoUpdateWithoutFavoritosInputObjectSchema as EstadoUpdateWithoutFavoritosInputObjectSchema } from "./EstadoUpdateWithoutFavoritosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EstadoUpdateWithoutFavoritosInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutFavoritosInputObjectSchema),
			]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutFavoritosInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutFavoritosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutFavoritosInput>;
export const EstadoUpdateToOneWithWhereWithoutFavoritosInputObjectZodSchema =
	makeSchema();
