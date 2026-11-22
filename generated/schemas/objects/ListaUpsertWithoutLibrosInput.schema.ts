import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaCreateWithoutLibrosInputObjectSchema as ListaCreateWithoutLibrosInputObjectSchema } from "./ListaCreateWithoutLibrosInput.schema.ts";
import { ListaUncheckedCreateWithoutLibrosInputObjectSchema as ListaUncheckedCreateWithoutLibrosInputObjectSchema } from "./ListaUncheckedCreateWithoutLibrosInput.schema.ts";
import { ListaUncheckedUpdateWithoutLibrosInputObjectSchema as ListaUncheckedUpdateWithoutLibrosInputObjectSchema } from "./ListaUncheckedUpdateWithoutLibrosInput.schema.ts";
import { ListaUpdateWithoutLibrosInputObjectSchema as ListaUpdateWithoutLibrosInputObjectSchema } from "./ListaUpdateWithoutLibrosInput.schema.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./ListaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => ListaUpdateWithoutLibrosInputObjectSchema),
				z.lazy(() => ListaUncheckedUpdateWithoutLibrosInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => ListaCreateWithoutLibrosInputObjectSchema),
				z.lazy(() => ListaUncheckedCreateWithoutLibrosInputObjectSchema),
			]),
			where: z.lazy(() => ListaWhereInputObjectSchema).optional(),
		})
		.strict();
export const ListaUpsertWithoutLibrosInputObjectSchema: z.ZodType<Prisma.ListaUpsertWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUpsertWithoutLibrosInput>;
export const ListaUpsertWithoutLibrosInputObjectZodSchema = makeSchema();
