import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateWithoutFavoritosInputObjectSchema as EscritorCreateWithoutFavoritosInputObjectSchema } from "./EscritorCreateWithoutFavoritosInput.schema.ts";
import { EscritorUncheckedCreateWithoutFavoritosInputObjectSchema as EscritorUncheckedCreateWithoutFavoritosInputObjectSchema } from "./EscritorUncheckedCreateWithoutFavoritosInput.schema.ts";
import { EscritorUncheckedUpdateWithoutFavoritosInputObjectSchema as EscritorUncheckedUpdateWithoutFavoritosInputObjectSchema } from "./EscritorUncheckedUpdateWithoutFavoritosInput.schema.ts";
import { EscritorUpdateWithoutFavoritosInputObjectSchema as EscritorUpdateWithoutFavoritosInputObjectSchema } from "./EscritorUpdateWithoutFavoritosInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EscritorUpdateWithoutFavoritosInputObjectSchema),
				z.lazy(() => EscritorUncheckedUpdateWithoutFavoritosInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EscritorCreateWithoutFavoritosInputObjectSchema),
				z.lazy(() => EscritorUncheckedCreateWithoutFavoritosInputObjectSchema),
			]),
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorUpsertWithoutFavoritosInputObjectSchema: z.ZodType<Prisma.EscritorUpsertWithoutFavoritosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpsertWithoutFavoritosInput>;
export const EscritorUpsertWithoutFavoritosInputObjectZodSchema = makeSchema();
