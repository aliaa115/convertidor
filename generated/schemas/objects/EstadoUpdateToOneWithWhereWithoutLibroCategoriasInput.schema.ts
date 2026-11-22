import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoUncheckedUpdateWithoutLibroCategoriasInputObjectSchema as EstadoUncheckedUpdateWithoutLibroCategoriasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutLibroCategoriasInput.schema.ts";
import { EstadoUpdateWithoutLibroCategoriasInputObjectSchema as EstadoUpdateWithoutLibroCategoriasInputObjectSchema } from "./EstadoUpdateWithoutLibroCategoriasInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => EstadoUpdateWithoutLibroCategoriasInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutLibroCategoriasInputObjectSchema)]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutLibroCategoriasInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutLibroCategoriasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutLibroCategoriasInput>;
export const EstadoUpdateToOneWithWhereWithoutLibroCategoriasInputObjectZodSchema = makeSchema();
