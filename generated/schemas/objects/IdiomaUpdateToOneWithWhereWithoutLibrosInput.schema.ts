import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { IdiomaUncheckedUpdateWithoutLibrosInputObjectSchema as IdiomaUncheckedUpdateWithoutLibrosInputObjectSchema } from "./IdiomaUncheckedUpdateWithoutLibrosInput.schema.ts";
import { IdiomaUpdateWithoutLibrosInputObjectSchema as IdiomaUpdateWithoutLibrosInputObjectSchema } from "./IdiomaUpdateWithoutLibrosInput.schema.ts";
import { IdiomaWhereInputObjectSchema as IdiomaWhereInputObjectSchema } from "./IdiomaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => IdiomaWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => IdiomaUpdateWithoutLibrosInputObjectSchema), z.lazy(() => IdiomaUncheckedUpdateWithoutLibrosInputObjectSchema)]),
		})
		.strict();
export const IdiomaUpdateToOneWithWhereWithoutLibrosInputObjectSchema: z.ZodType<Prisma.IdiomaUpdateToOneWithWhereWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaUpdateToOneWithWhereWithoutLibrosInput>;
export const IdiomaUpdateToOneWithWhereWithoutLibrosInputObjectZodSchema = makeSchema();
