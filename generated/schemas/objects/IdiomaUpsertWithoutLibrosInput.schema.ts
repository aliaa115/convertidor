import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { IdiomaCreateWithoutLibrosInputObjectSchema as IdiomaCreateWithoutLibrosInputObjectSchema } from "./IdiomaCreateWithoutLibrosInput.schema.ts";
import { IdiomaUncheckedCreateWithoutLibrosInputObjectSchema as IdiomaUncheckedCreateWithoutLibrosInputObjectSchema } from "./IdiomaUncheckedCreateWithoutLibrosInput.schema.ts";
import { IdiomaUncheckedUpdateWithoutLibrosInputObjectSchema as IdiomaUncheckedUpdateWithoutLibrosInputObjectSchema } from "./IdiomaUncheckedUpdateWithoutLibrosInput.schema.ts";
import { IdiomaUpdateWithoutLibrosInputObjectSchema as IdiomaUpdateWithoutLibrosInputObjectSchema } from "./IdiomaUpdateWithoutLibrosInput.schema.ts";
import { IdiomaWhereInputObjectSchema as IdiomaWhereInputObjectSchema } from "./IdiomaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => IdiomaUpdateWithoutLibrosInputObjectSchema), z.lazy(() => IdiomaUncheckedUpdateWithoutLibrosInputObjectSchema)]),
			create: z.union([z.lazy(() => IdiomaCreateWithoutLibrosInputObjectSchema), z.lazy(() => IdiomaUncheckedCreateWithoutLibrosInputObjectSchema)]),
			where: z.lazy(() => IdiomaWhereInputObjectSchema).optional(),
		})
		.strict();
export const IdiomaUpsertWithoutLibrosInputObjectSchema: z.ZodType<Prisma.IdiomaUpsertWithoutLibrosInput> = makeSchema() as unknown as z.ZodType<Prisma.IdiomaUpsertWithoutLibrosInput>;
export const IdiomaUpsertWithoutLibrosInputObjectZodSchema = makeSchema();
