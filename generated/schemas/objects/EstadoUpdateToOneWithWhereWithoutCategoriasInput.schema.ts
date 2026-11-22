import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoUncheckedUpdateWithoutCategoriasInputObjectSchema as EstadoUncheckedUpdateWithoutCategoriasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutCategoriasInput.schema.ts";
import { EstadoUpdateWithoutCategoriasInputObjectSchema as EstadoUpdateWithoutCategoriasInputObjectSchema } from "./EstadoUpdateWithoutCategoriasInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EstadoUpdateWithoutCategoriasInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutCategoriasInputObjectSchema),
			]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutCategoriasInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutCategoriasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutCategoriasInput>;
export const EstadoUpdateToOneWithWhereWithoutCategoriasInputObjectZodSchema =
	makeSchema();
