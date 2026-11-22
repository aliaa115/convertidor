import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorUncheckedUpdateWithoutFavoritosInputObjectSchema as EscritorUncheckedUpdateWithoutFavoritosInputObjectSchema } from "./EscritorUncheckedUpdateWithoutFavoritosInput.schema.ts";
import { EscritorUpdateWithoutFavoritosInputObjectSchema as EscritorUpdateWithoutFavoritosInputObjectSchema } from "./EscritorUpdateWithoutFavoritosInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EscritorUpdateWithoutFavoritosInputObjectSchema),
				z.lazy(() => EscritorUncheckedUpdateWithoutFavoritosInputObjectSchema),
			]),
		})
		.strict();
export const EscritorUpdateToOneWithWhereWithoutFavoritosInputObjectSchema: z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutFavoritosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutFavoritosInput>;
export const EscritorUpdateToOneWithWhereWithoutFavoritosInputObjectZodSchema =
	makeSchema();
