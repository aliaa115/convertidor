import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorUncheckedUpdateWithoutLibrosInputObjectSchema as EscritorUncheckedUpdateWithoutLibrosInputObjectSchema } from "./EscritorUncheckedUpdateWithoutLibrosInput.schema.ts";
import { EscritorUpdateWithoutLibrosInputObjectSchema as EscritorUpdateWithoutLibrosInputObjectSchema } from "./EscritorUpdateWithoutLibrosInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => EscritorUpdateWithoutLibrosInputObjectSchema), z.lazy(() => EscritorUncheckedUpdateWithoutLibrosInputObjectSchema)]),
		})
		.strict();
export const EscritorUpdateToOneWithWhereWithoutLibrosInputObjectSchema: z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutLibrosInput>;
export const EscritorUpdateToOneWithWhereWithoutLibrosInputObjectZodSchema = makeSchema();
