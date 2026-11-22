import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutCategoriasInputObjectSchema as EstadoCreateWithoutCategoriasInputObjectSchema } from "./EstadoCreateWithoutCategoriasInput.schema.ts";
import { EstadoUncheckedCreateWithoutCategoriasInputObjectSchema as EstadoUncheckedCreateWithoutCategoriasInputObjectSchema } from "./EstadoUncheckedCreateWithoutCategoriasInput.schema.ts";
import { EstadoUncheckedUpdateWithoutCategoriasInputObjectSchema as EstadoUncheckedUpdateWithoutCategoriasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutCategoriasInput.schema.ts";
import { EstadoUpdateWithoutCategoriasInputObjectSchema as EstadoUpdateWithoutCategoriasInputObjectSchema } from "./EstadoUpdateWithoutCategoriasInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EstadoUpdateWithoutCategoriasInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutCategoriasInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutCategoriasInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutCategoriasInputObjectSchema),
			]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutCategoriasInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutCategoriasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutCategoriasInput>;
export const EstadoUpsertWithoutCategoriasInputObjectZodSchema = makeSchema();
