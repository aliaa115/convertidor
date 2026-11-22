import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoUncheckedUpdateWithoutLibrosInputObjectSchema as EstadoUncheckedUpdateWithoutLibrosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutLibrosInput.schema.ts";
import { EstadoUpdateWithoutLibrosInputObjectSchema as EstadoUpdateWithoutLibrosInputObjectSchema } from "./EstadoUpdateWithoutLibrosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => EstadoUpdateWithoutLibrosInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutLibrosInputObjectSchema)]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutLibrosInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutLibrosInput>;
export const EstadoUpdateToOneWithWhereWithoutLibrosInputObjectZodSchema = makeSchema();
