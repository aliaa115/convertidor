import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutLibroCategoriasInputObjectSchema as EstadoCreateWithoutLibroCategoriasInputObjectSchema } from "./EstadoCreateWithoutLibroCategoriasInput.schema.ts";
import { EstadoUncheckedCreateWithoutLibroCategoriasInputObjectSchema as EstadoUncheckedCreateWithoutLibroCategoriasInputObjectSchema } from "./EstadoUncheckedCreateWithoutLibroCategoriasInput.schema.ts";
import { EstadoUncheckedUpdateWithoutLibroCategoriasInputObjectSchema as EstadoUncheckedUpdateWithoutLibroCategoriasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutLibroCategoriasInput.schema.ts";
import { EstadoUpdateWithoutLibroCategoriasInputObjectSchema as EstadoUpdateWithoutLibroCategoriasInputObjectSchema } from "./EstadoUpdateWithoutLibroCategoriasInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EstadoUpdateWithoutLibroCategoriasInputObjectSchema),
				z.lazy(
					() => EstadoUncheckedUpdateWithoutLibroCategoriasInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutLibroCategoriasInputObjectSchema),
				z.lazy(
					() => EstadoUncheckedCreateWithoutLibroCategoriasInputObjectSchema,
				),
			]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutLibroCategoriasInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutLibroCategoriasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutLibroCategoriasInput>;
export const EstadoUpsertWithoutLibroCategoriasInputObjectZodSchema =
	makeSchema();
